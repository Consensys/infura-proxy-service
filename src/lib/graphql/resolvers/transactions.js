/* --- Global --- */
import { combineResolvers } from 'graphql-resolvers';

/* --- Local --- */
import pubsub, { EVENTS } from '../subscription';
import { isServerAuthenticated } from './authorization';

/* --- Transaction : Resolver --- */
export default {
  Query: {
    transactions: async (parent, { limit }, { models }) => {
      return await await models.Transaction.findAll({
        limit: limit || 30,
      });
    },
    transaction: async (parent, { hash }, { models }) => {
      // return await models.Transaction.findById(hash);
      return await models.Transaction.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createTransaction: async (
      parent,
      transaction,
      { models, secret }
    ) => {
      const tx = await models.Transaction.create(transaction);

      pubsub.publish(EVENTS.TRANSACTION.CREATED, {
        transactionCreated: { message },
      });

      return { transaction: tx };
    },

    deleteTransaction: combineResolvers(
      isServerAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.Transaction.destroy({
          where: { id },
        });
      }
    ),
  },

  Subscription: {
    transactionCreated: {
      subscribe: () =>
        pubsub.asyncIterator(EVENTS.TRANSACTION.CREATED),
    },
  },
};
