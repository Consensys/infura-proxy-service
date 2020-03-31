import { ethers } from 'ethers';
import { createEventListener } from "./listener"
import { initEvent } from "./event"

export const initContractEvents = async (provider, data) => {
    console.log("Initializing Contract...")
    let contract = await parseContractJSON(provider, data)

    let cEvents = Object.keys(contract.interface.events)

    try {

        // Second loop to add all events...
        for (let i = 0; i < cEvents.length; i++) {
            const ename = cEvents[i];
            const eHash = ethers.utils.id(ename)

            // initialize event type
            await initEvent(contract, ename)

            //KICK OFF EVENT LISTENER HERE
            let eventABI = contract.interface.events[ename]
            console.log("kicking off event listener for " + ename)
            await createEventListener(contract, ename, eventABI.inputs)
        }
        
    } catch (err) {
        console.error(err)
    }
};

const parseContractJSON = async (provider, json) => {
    let network = await provider.getNetwork()
    let chainID = network.chainId
    const contract = new ethers.Contract(json.networks[chainID].address, json.abi, provider)
    return contract
}