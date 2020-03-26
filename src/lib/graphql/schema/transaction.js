import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    transactions(limit: Int, page: Int): [Transaction]
    transaction(hash: ID!): Transaction
  }

  # ---------------------------
  # Transaction : Level 1
  # ---------------------------
  type Transaction {
    id: ID!
    hash: String!
    blockHash: String!
    blockNumber: Int!
    transactionIndex: Int!
    confirmations: Int!
    from: String!
    to: String!
    data: String!
    gasPrice: BigNumber!
    gasLimit: BigNumber!
    value: BigNumber!
    nonce: Int!
    r: String!
    s: String!
    v: Int!
    creates: String
    raw: String
    networkId: Int!
    chainId: Int!
  }

  # ---------------------------
  # Account : Transaction : Level 2
  # ---------------------------
  type BigNumber {
    _hex: String
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createTransaction(id: ID!): Transaction!
    deleteTransaction(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    transactionCreated: TransactionCreated!
  }

  type TransactionCreated {
    transaction: Transaction!
  }
`;
