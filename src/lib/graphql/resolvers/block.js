/* --- Global --- */

/* --- Local --- */
import pubsub, { EVENTS } from '@subscription';

/* --- Block : Resolver --- */
export default {
  Query: {
    blockList: async (parent, { limit }, { models }) => {
      return await await models.Block.findAll({
        limit: limit || 30,
      });
    },
    block: async (parent, { hash }, { models }) => {
      return await models.Block.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createBlock: async (parent, block, { models }) => {
      const data = await models.Block.create(block);

      pubsub.publish(EVENTS.BLOCK.CREATED, {
        blockCreated: { block: data },
      });

      return { block: data };
    },

    deleteBlock: async (parent, { id }, { models }) => {
      return await models.Block.destroy({
        where: { id },
      });
    },
  },

  Subscription: {
    blockCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.BLOCK.CREATED),
    },
  },
};
