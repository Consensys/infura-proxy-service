
import models from '@models';

const FROM_BLOCK = process.env.EVENT_FROM_BLOCK ? parseInt(process.env.EVENT_FROM_BLOCK) : 0

export const initEvent = async (contract, ename) => {
    console.log("Initializing specific event: " + ename)
    let eventArray = await contract.queryFilter(ename, FROM_BLOCK)
    for (let j = 0; j < eventArray.length; j++) {
        const event = eventArray[j];
        await processAndStoreEvent(contract, event)
    }
}

export const processAndStoreEvent = async (contract, eventLog) => {
    let eventABI = contract.interface.events[eventLog.eventSignature]
    let rawEvent = []
    for (let k = 0; k < eventABI.inputs.length; k++) {
        const arg = eventLog.args[k];
        rawEvent.push(arg)
    }
    let jsonEvent = normalizeEvent(eventLog.args, eventABI.inputs)
    // STORE INDIVIDUAL EVENT HERE
    let storeObject = {
        transaction_hash: eventLog.transactionHash,
        contract_address: contract.address,
        event_abi: eventABI,
        raw_event: rawEvent,
        json_event: jsonEvent,
        event_topic_hash: eventLog.topics[0]
    }
    console.log("storing new event " + eventLog.event)
    models.Event.create(storeObject)
}

const normalizeEvent = (e, inputs) => {
    let o = {}
    inputs.forEach(input => {
        o[input.name] = e[input.name]
    });
    return o
}