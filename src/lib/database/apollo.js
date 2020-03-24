/* --- Global --- */
import { ApolloServer } from 'apollo-server-express';
import DataLoader from 'dataloader';

/* --- Local --- */
import models from '@models';
import schema from '@schema';
import resolvers from '@resolvers';
import loaders from '@loaders';
import { getMe } from './jwt';

/* ----------------------- */
/* Apollo Server
/* ----------------------- */
export const initServer = (app, httpServer) => {
  const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers,
    formatError: error => {
      // remove the internal sequelize error message
      // leave only the important validation error
      const message = error.message
        .replace('SequelizeValidationError: ', '')
        .replace('Validation error: ', '');

      return {
        ...error,
        message,
      };
    },
    context: async ({ req, connection }) => {
      if (connection) {
        return {
          models,
          loaders: {
            user: new DataLoader(keys =>
              loaders.user.batchUsers(keys, models)
            ),
          },
        };
      }

      if (req) {
        const me = await getMe(req);
        return {
          models,
          me,
          secret: process.env.SECRET,
          loaders: {
            user: new DataLoader(keys =>
              loaders.user.batchUsers(keys, models)
            ),
          },
        };
      }
    },
  });

  server.applyMiddleware({ app, path: '/graphql' });
  server.installSubscriptionHandlers(httpServer);
};
