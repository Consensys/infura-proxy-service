import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import transactions from './transactions';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolvers, transactions];
