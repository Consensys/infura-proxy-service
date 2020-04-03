import { ethers } from 'ethers';
import { createEventListener } from './listener';
import { initEvent } from './event';
import models from '@models';

export const initContractEvents = async (provider, contractData) => {
  console.log('Initializing Contract...');


  console.log("contract added to db" + contractData.name)
  let contract = await parseJSONToContract(provider, contractData);
  let contractEvents = Object.keys(contract.interface.events);

  let eventSignatures = contractEvents.map(e => ethers.utils.id(e))

  // first add contract to db (address is primary key, bounces are fine)
  contractData['event_topics'] = eventSignatures
  models.Contract.create(contractData)


  try {
    for (let i = 0; i < contractEvents.length; i++) {
      const eventName = contractEvents[i];

      // initialize event type
      await initEvent(contract, eventName);

      //KICK OFF EVENT LISTENER HERE
      let eventABI = contract.interface.events[eventName];
      console.log('kicking off event listener for ' + eventName);
      await createEventListener(contract, eventName, eventABI.inputs);
    }
  } catch (err) {
    console.error(err);
  }
};

const parseJSONToContract = (provider, contractData) => {
  const contract = new ethers.Contract(
    contractData.address,
    contractData.abi,
    provider
  );
  return contract;
};
