import { ethers } from 'ethers';
import { createEventListener } from "./listener"
import { initEvent } from "./event"

export const initContractEvents = async (provider, data) => {

    console.log("Initializing Contract...")
    let contract = await parseContractJSON(provider, data)
    let contractEvents = Object.keys(contract.interface.events)

    try {
        for (let i = 0; i < contractEvents.length; i++) {
            const eventName = contractEvents[i];

            // initialize event type
            await initEvent(contract, eventName)

            //KICK OFF EVENT LISTENER HERE
            let eventABI = contract.interface.events[eventName]
            console.log("kicking off event listener for " + eventName)
            await createEventListener(contract, eventName, eventABI.inputs)
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