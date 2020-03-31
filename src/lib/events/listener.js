import { processAndStoreEvent } from "./event"

const saveLogEvent = (contract, model) => (...args) => {
    // let o = {}
    // for (let i = 0; i < inputs.length; i++) {
    //     const input = inputs[i];
    //     o[input.name] = args[i]
    // }
    console.log("** JJ")
    let eventLog = args[args.length-1]

    processAndStoreEvent(contract, eventLog, model)
    // o.transactionHash = args[args.length-1].transactionHash
    // model.create(o)
}

export const createEventListener = async (contract, eventName, inputs, model) => {
    contract.on(eventName, saveLogEvent(contract, model))
}