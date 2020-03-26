import { PubSub } from 'apollo-server';

import * as MESSAGE_EVENTS from './message';
import * as TRANSACTION_EVENTS from './transaction';

export const EVENTS = {
  TRANSACTION: TRANSACTION_EVENTS,
  MESSAGE: MESSAGE_EVENTS,
};

export default new PubSub();
