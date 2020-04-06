import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Event
  # ---------------------------
  type Event {
    id: ID!
    transaction_hash: String
    event_topic_hash: String
    contract_address: String
    event_abi: String!
    raw_event: String!
    json_event: String!
    createdAt: String!
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    eventList(limit: Int, page: Int, filters: EventFilters): [Event]
    event(hash: ID!): Event
  }

  input EventFilters {
    transaction_hash: String
    event_topic_hash: String
    contract_address: String
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createEvent(id: ID!): Event!
    deleteEvent(id: ID!): Boolean!
  }

  # ---------------------------
  # Extend : Subscription
  # ---------------------------
  extend type Subscription {
    eventCreated: EventCreated!
  }

  type EventCreated {
    event: Event!
  }
`;
