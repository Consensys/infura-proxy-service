import { ethers } from 'ethers';
import { createEventListener } from './listener';
import { initEvent } from './event';
import models from '@models';

export const initNewContract = async (
  provider,
  contractData,
  fromBlock
) => {
  console.log('Initializing Contract...');

  let contract = await parseJSONToContract(provider, contractData);
  let contractEvents = Object.keys(contract.interface.events);

  let eventSignatures = contractEvents.map((e) => ethers.utils.id(e));

  // first add contract to db (address is primary key, bounces are fine)
  contractData['event_topics'] = eventSignatures;
  try {
    let c = await models.Contract.create(contractData);
    console.log('contract added to db' + contractData.name);
    console.log(c);

    await initContractEvents(provider, contractData, fromBlock);
  } catch (err) {
    console.log('Possible Duplicate?');
    // console.log(err)
  }
};

export const initContractEvents = async (
  provider,
  contractData,
  fromBlock
) => {
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
};

const parseJSONToContract = (provider, contractData) => {
  const contract = new ethers.Contract(
    contractData.address,
    contractData.abi,
    provider
  );
  return contract;
};
