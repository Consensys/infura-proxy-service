import { GraphQLDateTime } from 'graphql-iso-date';
import BigInteger from './custom/BigInt';

console.log(BigInteger, 'BigIntss');
import userResolvers from './user';
import block from './block';
import transaction from './transactions';
import receipt from './receipt';

const customScalarResolver = {
  Date: GraphQLDateTime,
  BigInt: BigInteger,
};

export default [
  customScalarResolver,
  userResolvers,
  block,
  transaction,
  receipt,
];
