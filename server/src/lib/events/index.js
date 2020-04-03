import fs from 'fs';
import path from 'path';

import { initContractEvents } from './contracts';

// interface to initialize contracts on startup
export const initContracts = async (dir, provider) => {
  if (!fs.existsSync(dir)) {
    console.error('Directory does not exist: ', dir);
    return;
  }

  let files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (/.*.json/.test(file)) {
      var filename = path.join(dir, file);
      const fileContents = fs.readFileSync(filename, 'utf8');
      const data = JSON.parse(fileContents);
      await initContractEvents(provider, data);
    }

    let files = fs.readdirSync(dir)
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (/.*.json/.test(file)) {
            var filename = path.join(dir, file);
            const fileContents = fs.readFileSync(filename, 'utf8')
            const data = JSON.parse(fileContents)
            const contractJSON = await parseTruffleFormatJSON(data, provider)

            await initContractEvents(provider, contractJSON)
        }
    }
}


const parseTruffleFormatJSON = async (json, provider) => {
    let network = await provider.getNetwork()
    let chainID = network.chainId
    let contractJSON = {
        name: json.name,
        abi: json.abi,
        address: json.networks[chainID].address
    }
    return contractJSON
}