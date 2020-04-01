/* --- Global --- */

/* --- Local --- */
import models from '@models';
import pubsub, { EVENTS } from '@lib/graphql/subscription';
import { setupInufraProvider } from '@config';

const provider = setupInufraProvider();

/* ============================================== */
// Core : Ethereum
/* ============================================== */

/**
 * @function listenEthBlock
 * @description
 * @param {*} req
 * @param {*} res
 */

export const listenEthBlock = async () => {
  let data;
  provider.on('block', async blockNumber => {
    data = await provider.getBlock(Number(blockNumber));
    models.Block.create({ id: blockNumber, ...data });
    pubsub.publish(EVENTS.BLOCK.CREATED, {
      blockCreated: { block: data },
    });
  });
};
