import { ethers } from 'ethers';
import eventModeller from './eventModeller';
import { registerEventModel, modelExists, getEventModel } from "./registry"
import { createEventListener } from "./listener"
import { initEvent } from "./event"

export const initContractEvents = async (provider, data) => {
    console.log("Initializing Contract...")
    let contract = await parseContractJSON(provider, data)

    let cEvents = Object.keys(contract.interface.events)

    try {
        for (let i = 0; i < cEvents.length; i++) {
            const ename = cEvents[i];
            const eHash = ethers.utils.id(ename)
            
            let model 
            if (modelExists(eHash)) {
                model = getEventModel(eHash)
            } else {
                // create new model
                model = eventModeller(eHash)
                // register model
                registerEventModel(eHash, model)
            }

            // initialize event type
            await initEvent(contract, ename, model)

            //KICK OFF EVENT LISTENER HERE
            let eventABI = contract.interface.events[ename]
            console.log("kicking off event listener for " + ename)
            await createEventListener(contract, ename, eventABI.inputs, model)
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