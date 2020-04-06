import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Contract
  # ---------------------------
  type Contract {
    id: ID!
    address: String
    name: String
    abi: String
    event_topics: String!
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    contractList(limit: Int, page: Int): [Contract]
    contract(hash: ID!): Contract
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createContract(id: ID!): Contract!
    deleteContract(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    contractCreated: ContractCreated!
  }

  type ContractCreated {
    contract: Contract!
  }
`;
