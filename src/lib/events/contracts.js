import { ethers } from 'ethers';
import eventModeller from './eventModeller';
import { registerEventModel, getEventModel } from './registry';
import { createEventListener } from './listener';
import fs from 'fs';
import path from 'path';

let contractsABI = [];

export const initContracts = async dir => {
  if (!fs.existsSync(dir)) {
    console.err('Directory does not exist: ', dir);
    return;
  }

  let files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (/.*.json/.test(file)) {
      var filename = path.join(dir, file);
      const fileContents = fs.readFileSync(filename, 'utf8');
      const data = JSON.parse(fileContents);
      await initContract(data);
    }
  }
};

export const initContract = async data => {
  console.log('Initializing Contract...');
  contractsABI.push(data);
  try {
    for (let i = 0; i < data.abi.length; i++) {
      const abiField = data.abi[i];
      if (abiField.type === 'event') {
        //create and register model
        let m = eventModeller(abiField);
        registerEventModel(abiField.name, m);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const initEvents = async provider => {
  for (let i = 0; i < contractsABI.length; i++) {
    const cData = contractsABI[i];
    let contract = await parseContractJSON(provider, cData);
    for (let i = 0; i < cData.abi.length; i++) {
      const abiField = cData.abi[i];
      if (abiField.type === 'event') {
        let m = getEventModel(abiField.name);
        let events = await getDecodedEvents(
          contract,
          abiField.name,
          abiField.inputs
        );
        for (let j = 0; j < events.length; j++) {
          const event = events[j];
          m.create(event);
        }
        createEventListener(
          contract,
          abiField.name,
          abiField.inputs,
          m
        );
      }
    }
  }
};

const parseContractJSON = async (provider, json) => {
  let network = await provider.getNetwork();
  let chainID = network.chainId;
  const contract = new ethers.Contract(
    json.networks[chainID].address,
    json.abi,
    provider
  );
  return contract;
};

const fromBlockLimit = process.env.EVENT_FROM_BLOCK || 0;
const getDecodedEvents = async (contract, eventBareName, inputs) => {
  let eventArray = await contract.queryFilter(
    eventBareName,
    fromBlockLimit
  );
  let decoded = [];
  for (let i = 0; i < eventArray.length; i++) {
    const ev = eventArray[i];
    let decodedEvent = await contract.interface.decodeEventLog(
      eventBareName,
      ev.data,
      ev.topics
    );
    let o = {};
    inputs.forEach(input => {
      o[input.name] = decodedEvent[input.name];
    });
    o.transactionHash = ev.transactionHash;
    decoded.push(o);
  }
  return decoded;
};
