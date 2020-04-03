/* --- Global --- */

/* --- Local --- */
import pubsub, { EVENTS } from '@subscription';

/* --- Event : Resolver --- */
export default {
  Query: {
    eventList: async (parent, { limit }, { models }) => {
      let parsed;
      const events = await models.Event.findAll({
        limit: limit || 30,
      });
      try {
        parsed = events.map(event => {
          Object.keys(event.dataValues).forEach(key => {
            if (
              key == 'event_abi' ||
              key == 'json_event' ||
              key == 'raw_event'
            ) {
              event[key] = JSON.stringify(event[key]);
            } else {
              event[key] = event[key];
            }
          });
          return event;
        });
      } catch (error) {
        console.log(error);
      }
      return parsed;
    },
    event: async (parent, { hash }, { models }) => {
      return await models.Event.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createEvent: async (parent, event, { models }) => {
      const data = await models.Event.create(event);

      pubsub.publish(EVENTS.EVENT.CREATED, {
        eventCreated: { event: data },
      });

      return { event: data };
    },

    deleteEvent: async (parent, { id }, { models }) => {
      return await models.Event.destroy({
        where: { id },
      });
    },
  },

  Subscription: {
    eventCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.EVENT.CREATED),
    },
  },
};
