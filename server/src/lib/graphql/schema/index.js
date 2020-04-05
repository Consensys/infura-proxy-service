import { gql } from 'apollo-server-express';

import common from './common';
import user from './user';
import block from './block';
import event from './event';
import eventMeta from './eventMeta';
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
  event,
  eventMeta,
  transaction,
  receipt,
];
