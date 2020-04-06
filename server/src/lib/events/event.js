import { ethers } from 'ethers';

import models from '@models';


export const initEvent = async (contract, ename, fromBlock) => {
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
  models.EventMeta.create(metaEventObject);
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
  // STORE INDIVIDUAL EVENT HERE
  let storeObject = {
    transaction_hash: eventLog.transactionHash,
    contract_address: contract.address,
    event_abi: eventABI,
    raw_event: rawEvent,
    json_event: jsonEvent,
    event_topic_hash: eventLog.topics[0],
  };
  console.log('storing new event ' + eventLog.event);
  models.Event.create(storeObject);
};

const normalizeEvent = (e, inputs) => {
  let o = {};
  inputs.forEach(input => {
    o[input.name] = e[input.name];
  });
  return o;
};
