import fs from 'fs';
import path from 'path';
import models from '@models';

import { initNewContract, initContractEvents } from './contracts';

const FROM_BLOCK = process.env.EVENT_FROM_BLOCK
  ? parseInt(process.env.EVENT_FROM_BLOCK)
  : 0;

export const initAllContracts = async (dir, provider) => {
  console.log("Initializing contracts from DB...")
  await initFromDB(provider)
  console.log("Intializing contracts from config...")
  await initFromConfig(dir, provider)

}

export const initFromConfig = async (dir, provider) => {
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
      const contractJSON = await parseTruffleFormatJSON(
        data,
        provider
      );

      //adds to DB then Calls to init events
      await initNewContract(provider, contractJSON, FROM_BLOCK);
    }
  }
};


export const initFromDB = async (provider) => {

  console.log("NOW I AM INIT FROM DZB")

  let fromBlock = getLatestBlockNumberFromEvents(provider) || FROM_BLOCK
  let contractsInDB = await models.Contract.findAll({})

  console.log(contractsInDB)
  for (let i = 0; i < contractsInDB.length; i++) {
    const c = contractsInDB[i];

    //only calls to init events (does not re-add to DB)
    await initContractEvents(provider, c, fromBlock);
  }

}


const parseTruffleFormatJSON = async (json, provider) => {
  let network = await provider.getNetwork();
  let chainID = network.chainId;
  let contractJSON = {
    name: json.name,
    abi: json.abi,
    address: json.networks[chainID].address,
  };
  return contractJSON;
};

const getLatestBlockNumberFromEvents = async (provider) => {
  let one = await models.Event.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  })
  if (one.length) {
    let txHash = one[0]["transaction_hash"]
    let tx = await provider.getTransaction(txHash)
    return tx.blockNumber
  }
  return null
}