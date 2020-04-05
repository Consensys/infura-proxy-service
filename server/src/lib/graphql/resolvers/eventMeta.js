/* --- Global --- */

/* --- Local --- */
import pubsub, { EVENTS } from '@subscription';

/* --- Event : Resolver --- */
export default {
  Query: {
    eventMetaList: async (parent, { limit }, { models }) => {
      let parsed;
      const events = await models.EventMeta.findAll({
        limit: limit || 30,
      });
      console.log(events, 'eventsevents');
      try {
        parsed = events.map((event) => {
          Object.keys(event.dataValues).forEach((key) => {
            if (key == 'event_abi') {
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
    eventMeta: async (parent, { hash }, { models }) => {
      return await models.EventMeta.findOne({
        where: {
          hash: hash,
        },
      });
    },
  },

  Mutation: {
    createEventMeta: async (parent, event, { models }) => {
      const data = await models.EventMeta.create(event);

      pubsub.publish(EVENTS.EVENT.CREATED, {
        eventCreated: { event: data },
      });

      return { event: data };
    },

    deleteEventMeta: async (parent, { id }, { models }) => {
      return await models.EventMeta.destroy({
        where: { id },
      });
    },
  },

  Subscription: {
    eventMetaCreated: {
      subscribe: () =>
        pubsub.asyncIterator(EVENTS.EVENT_META.CREATED),
    },
  },
};
