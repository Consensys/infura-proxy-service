/* --- Global --- */

/* --- Local --- */
import pubsub, { EVENTS } from '@subscription';

/* --- Event : Resolver --- */
export default {
  Query: {
    contractList: async (parent, { limit }, { models }) => {
      let parsed;
      const contracts = await models.Contract.findAll({
        limit: limit || 30,
      });
      try {
        parsed = contracts.map((contract) => {
          Object.keys(contract.dataValues).forEach((key) => {
            if (key == 'abi' || key == 'event_topics') {
              contract[key] = JSON.stringify(contract[key]);
            } else {
              contract[key] = contract[key];
            }
          });
          return contract;
        });
      } catch (error) {
        console.log(error);
      }
      return parsed;
    },
    contract: async (parent, { hash }, { models }) => {
      return await models.Contract.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createContract: async (parent, contract, { models }) => {
      const data = await models.Contract.create(contract);

      pubsub.publish(EVENTS.CONTRACT.CREATED, {
        contractCreated: { contract: data },
      });

      return { contract: data };
    },

    deleteContract: async (parent, { address }, { models }) => {
      return await models.Contract.destroy({
        where: { address },
      });
    },
  },

  Subscription: {
    contractCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.CONTRACT.CREATED),
    },
  },
};
