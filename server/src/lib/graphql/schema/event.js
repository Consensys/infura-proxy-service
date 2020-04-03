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
  }

  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    eventList(limit: Int, page: Int): [Event]
    event(hash: ID!): Event
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
