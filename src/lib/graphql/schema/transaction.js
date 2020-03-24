import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    transactionList: [Transaction!]
    transaction(hash: ID!): Transaction
  }

  # ---------------------------
  # Transaction : Level 1
  # ---------------------------
  type Transaction {
    id: ID!
    username: String!
    accounts: [Account]
    name: Name
    contact: Contact
    job: Job
    location: Location
  }

  # ---------------------------
  # Account : Transaction : Level 2
  # ---------------------------
  type Account {
    platform: String
    username: String
  }

  # ---------------------------
  # Name : Transaction : Level 2
  # ---------------------------
  type Name {
    nameDisplay: String
    nameFirst: String
    nameLast: String
  }

  # ---------------------------
  # Contact : Transaction : Level 2
  # ---------------------------
  type Contact {
    email: String
    phone: String
  }

  # ---------------------------
  # Job : Transaction : Level 2
  # ---------------------------
  type Job {
    employer: String
    role: String
  }

  # ---------------------------
  # Location : Transaction : Level 2
  # ---------------------------
  type Location {
    city: String
    state: String
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createTransaction(username: String!): Transaction!

    updateTransaction(username: String!): Transaction!
    deleteTransaction(id: ID!): Boolean!
  }
`;
