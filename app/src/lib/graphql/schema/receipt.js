import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Receipt : Type
  # ---------------------------
  type Receipt {
    id: ID!
    to: String!
    from: String!
    contractAddress: String!
    transactionIndex: Int!
    gasUsed: BigNumber!
    logsBloom: String
    blockHash: String
    transactionHash: String
    logs: [String]
    blockNumber: Int!
    confirmations: Int!
    cumulativeGasUsed: BigNumber!
    status: Int!
    byzantium: Boolean!
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    receiptList(limit: Int, page: Int): [Receipt]
    receipt(hash: ID!): Receipt
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createReceipt(id: ID!): Receipt!
    deleteReceipt(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    receiptCreated: ReceiptCreated!
  }

  type ReceiptCreated {
    receipt: Receipt!
  }
`;
