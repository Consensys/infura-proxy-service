import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Block
  # ---------------------------
  type Block {
    id: ID!
    hash: String!
    parentHash: String!
    number: Int!
    timestamp: Int!
    nonce: String!
    difficulty: BigInt!
    gasLimit: BigNumber!
    gasUsed: BigNumber!
    miner: String!
    extraData: String!
    transactions: [String]!
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    blockList(limit: Int, page: Int): [Block]
    block(hash: ID!): Block
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createBlock(id: ID!): Block!
    deleteBlock(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    blockCreated: BlockCreated!
  }

  type BlockCreated {
    block: Block!
  }
`;
