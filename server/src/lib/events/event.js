import { ethers } from 'ethers';
import { createEventListener } from './listener'
import { parseJSONToContract } from './utils'
import models from '@models';

export const initContractEvents = async (provider, contractData, fromBlock) => {
  let contract = await parseJSONToContract(provider, contractData);
  let contractEvents = Object.keys(contract.interface.events);

  try {
    for (let i = 0; i < contractEvents.length; i++) {
      const eventName = contractEvents[i];

      // initialize event type
      await initEvent(contract, eventName, fromBlock);


      //KICK OFF EVENT LISTENER HERE
      let eventABI = contract.interface.events[eventName];
      console.log('kicking off event listener for ' + eventName);
      await createEventListener(contract, eventName, eventABI.inputs);
    }
  } catch (err) {
    console.error(err);
  }
}


const initEvent = async (contract, ename, fromBlock) => {
  console.log('Initializing specific event: ' + ename);

  // create meta object
  let eventABI = contract.interface.events[ename];
  let topicHash = ethers.utils.id(ename);
  let metaEventObject = {
    event_topic_hash: topicHash,
    event_name: ename,
    event_bare_name: eventABI.name,
    event_abi: eventABI,
  };

  try {
    await models.EventMeta.create(metaEventObject);
  } catch(err) {
    // Ignore unique constraint DB bounces on event meta table
    if (err.name !== "SequelizeUniqueConstraintError") {
      throw err
    }
  }

  // filter for events
  let eventArray = await contract.queryFilter(ename, fromBlock);
  for (let j = 0; j < eventArray.length; j++) {
    const event = eventArray[j];
    await processAndStoreEvent(contract, event);
  }
};

export const processAndStoreEvent = async (contract, eventLog) => {
  let eventABI = contract.interface.events[eventLog.eventSignature];
  let rawEvent = [];
  for (let k = 0; k < eventABI.inputs.length; k++) {
    const arg = eventLog.args[k];
    rawEvent.push(arg);
  }
  let jsonEvent = normalizeEvent(eventLog.args, eventABI.inputs);

  let storeObject = {
    transaction_hash: eventLog.transactionHash,
    contract_address: contract.address,
    event_abi: eventABI,
    raw_event: rawEvent,
    json_event: jsonEvent,
    event_topic_hash: eventLog.topics[0],
  };

  console.log('storing new event ' + eventLog.event);
  await models.Event.create(storeObject);

};

const normalizeEvent = (e, inputs) => {
  let o = {};
  inputs.forEach(input => {
    o[input.name] = e[input.name];
  });
  return o;
};
