/* --- Global --- */
import axios from 'axios';

/* --- Local --- */
import models from '@models';
import pubsub, { EVENTS } from '@lib/graphql/subscription';
/* ============================================== */
// Core : Ethereum
/* ============================================== */

/**
 * @function cacheEthTransaction
 * @description
 * @param {*} req
 * @param {*} res
 */

export const cacheEthTransaction = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const hash = req.params.hash;

  try {
    // Search for transaction in the database using the
    // the hash as the primary identifier.
    data = await models.Transaction.find({
      where: {
        id: hash,
      },
    });

    // IF the transaction IS NOT available in the database
    // request the transaction and CREATE record in the database.
    if (!data) {
      data = await provider.getTransaction(hash);
      models.Transaction.create({ id: hash, ...data });
      pubsub.publish(EVENTS.TRANSACTION.CREATED, {
        transactionCreated: { transaction: data },
      });
      return res.send({ status: 'infura', data });
    } else {
      return res.send({ status: 'cache', data });
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function cacheEthReceipt
 * @description
 * @param {*} req
 * @param {*} res
 */
export const cacheEthReceipt = async (req, res) => {
  let data;
  const provider = req.app.get('provider');
  const hash = req.params.hash;

  try {
    // Search for receipt in the database using the
    // the hash as the primary identifier.
    data = await models.Receipt.find({
      where: {
        id: hash,
      },
    });

    // IF the receipt IS NOT available in the database
    // request the receipt and CREATE record in the database.
    if (!data) {
      data = await provider.getReceipt(hash);
      models.Receipt.create({ id: hash, ...data });

      pubsub.publish(EVENTS.TRANSACTION.CREATED, {
        transactionCreated: data,
      });

      return res.send({ status: 'infura', data });
    } else {
      return res.send({ status: 'cache', data });
    }
  } catch (error) {
    console.log(error);
  }
};
