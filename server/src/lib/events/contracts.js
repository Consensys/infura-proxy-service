import { ethers } from 'ethers';
import { createEventListener } from './listener';
import { initEvent } from './event';

export const initContractEvents = async (provider, contractData) => {

    console.log("Initializing Contract...")
    let contract = await parseJSONToContract(provider, contractData)
    let contractEvents = Object.keys(contract.interface.events)

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
    console.log("JOEOE", contractData)
    const contract = new ethers.Contract(contractData.address, contractData.abi, provider)
    return contract
}
