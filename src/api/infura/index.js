/* --- Global --- */
import axios from 'axios';

/* --- Local --- */
import models from '@models';

/* ============================================== */
// Core : Ethereum
/* ============================================== */

/**
 * @function ethLatestBlock
 * @description
 * @param {*} req
 * @param {*} res
 */
export const ethLatestBlock = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  try {
    data = await provider.getBlockNumber();
    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function getGasEstimate
 * @description
 * @param {*} req
 * @param {*} res
 */
export const getGasEstimate = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  try {
    data = await provider.getGasPrice();
    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function getEthTransaction
 * @description
 * @param {*} req
 * @param {*} res
 */
export const getEthTransaction = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const hash = req.params.hash;
  try {
    data = await provider.getTransaction(hash);

    models.Transaction.create({ id: hash, ...data });

    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function getEthTransactionReceipt
 * @description
 * @param {*} req
 * @param {*} res
 */
export const getEthTransactionReceipt = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const hash = req.params.hash;
  try {
    data = await provider.getTransactionReceipt(hash);
    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

/* ============================================== */
// Ethereum Name Service
/* ============================================== */

/**
 * @function ensResolveAddress
 * @description
 * @param {*} req
 * @param {*} res
 */
export const ensResolveAddress = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const name = req.params.name;
  try {
    data = await provider.resolveName(name);
    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function ensLookupAddress
 * @description
 * @param {*} req
 * @param {*} res
 */
export const ensLookupAddress = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const address = req.params.address;
  try {
    data = await provider.lookupAddress(address);
    return res.send({ data });
  } catch (error) {
    console.log(error);
  }
};
