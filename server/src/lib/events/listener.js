import { processAndStoreEvent } from "./event"

const saveLogEvent = (contract) => (...args) => {

    console.log("** New Event Found")
    let eventLog = args[args.length-1]

    processAndStoreEvent(contract, eventLog)

}

export const createEventListener = async (contract, eventName, inputs) => {
    contract.on(eventName, saveLogEvent(contract))
}