/* --- Global --- */

/* --- Local --- */
import pubsub, { EVENTS } from '@subscription';

/* --- Receipt : Resolver --- */
export default {
  Query: {
    receiptList: async (parent, { limit }, { models }) => {
      return await await models.Receipt.findAll({
        limit: limit || 30,
      });
    },
    receipt: async (parent, { hash }, { models }) => {
      return await models.Receipt.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createReceipt: async (parent, receipt, { models }) => {
      const data = await models.Receipt.create(receipt);

      pubsub.publish(EVENTS.BLOCK.CREATED, {
        receiptCreated: { receipt: data },
      });

      return { receipt: data };
    },

    deleteReceipt: async (parent, { id }, { models }) => {
      return await models.Receipt.destroy({
        where: { id },
      });
    },
  },

  Subscription: {
    receiptCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.BLOCK.CREATED),
    },
  },
};
