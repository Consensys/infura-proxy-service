import fs from 'fs';
import path from 'path';
import models from '@models';
import { ethers } from 'ethers';

import { initContractEvents } from './event';
import { parseContractJSON, contractDataToEventTopics } from './utils'

const FROM_BLOCK = process.env.EVENT_FROM_BLOCK
  ? parseInt(process.env.EVENT_FROM_BLOCK)
  : 0;

export const initAllContracts = async (dir, provider) => {
  console.log("Initializing contracts from DB...")
  await initFromDB(provider)
  console.log("Intializing contracts from config...")
  await initFromConfig(dir, provider)

}

/**
 * @function initFromConfig
 * @description Reads each JSON file from a config directory and parses them into a normalized 
 * data format before calling `initNewContract` for each one
 */
export const initFromConfig = async (dir, provider) => {
  console.log("Intitializing Events for Contracts in Config...")

  if (!fs.existsSync(dir)) {
    console.err('Directory does not exist: ', dir);
    return;
  }

  // Read each JSON file from config directory
  let files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (/.*.json/.test(file)) {
      var filename = path.join(dir, file);
      const fileContents = fs.readFileSync(filename, 'utf8');
      const data = JSON.parse(fileContents);
      const contractData = await parseContractJSON(
        data,
        provider
      );

      //add list of event_topics to the contract data object
      contractData['event_topics'] = await contractDataToEventTopics(provider, contractData)

      try {
        await models.Contract.create(contractData)
        console.log("contract added to db" + contractData.name)

        await initContractEvents(provider, contractData, fromBlock)
      
      } catch(err) {
        // Ignore unique constraint DB bounces on event meta table
        if (err.name !== "SequelizeUniqueConstraintError") {
          throw err
        }
      }
    }
  }
};


/**
 * @function initFromDB
 * @description Restarts existing contracts to find any events missed while the server was not running
 * and start new listeners for each one.
 */
export const initFromDB = async (provider) => {
  console.log("Intitializing Events for Contracts in DB...")
  
  // Find the block last logged into the DB so we can start from there
  let fromBlock = getLatestBlockNumberFromEvents(provider) || FROM_BLOCK

  // Get a list of contracts already in the DB
  let contractsInDB = await models.Contract.findAll({})

  for (let i = 0; i < contractsInDB.length; i++) {
    const c = contractsInDB[i];

    //only calls to init events (does not re-add to DB)
    await initContractEvents(provider, c, fromBlock);
  }

}

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