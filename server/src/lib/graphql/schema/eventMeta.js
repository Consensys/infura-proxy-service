import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # EventMeta
  # ---------------------------
  type EventMeta {
    id: ID!
    event_topic_hash: String
    event_name: String
    event_bare_name: String
    event_abi: String!
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    eventMetaList(limit: Int, page: Int): [EventMeta]
    eventMeta(hash: ID!): EventMeta
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createEventMeta(id: ID!): EventMeta!
    deleteEventMeta(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    eventMetaCreated: EventMetaCreated!
  }

  type EventMetaCreated {
    eventMeta: EventMeta!
  }
`;
