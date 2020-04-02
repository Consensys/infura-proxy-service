import { gql } from 'apollo-server-express';

import common from './common';
import user from './user';
import block from './block';
import transaction from './transaction';
import receipt from './receipt';

const linkSchema = gql`
  scalar Date
  scalar BigInt

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  common,
  user,
  block,
  transaction,
  receipt,
];
