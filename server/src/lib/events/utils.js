import { ethers } from 'ethers';

export const parseContractJSON = async (json, provider) => {
  let network = await provider.getNetwork();
  let chainID = network.chainId;
  let contractJSON = {
    name: json.name,
    abi: json.abi,
    address: json.networks[chainID].address,
  };
  return contractJSON;
};

export const parseJSONToContract = (provider, contractData) => {
  const contract = new ethers.Contract(
    contractData.address,
    contractData.abi,
    provider
  );
  return contract;
};

export const contractDataToEventTopics = async (provider, contractData) => {
  let contract = await parseJSONToContract(provider, contractData);
  let contractEvents = Object.keys(contract.interface.events);
  let eventSignatures = contractEvents.map(e => ethers.utils.id(e))
  return eventSignatures
}