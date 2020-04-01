import { PubSub } from 'apollo-server';

import * as BLOCK_EVENTS from './block';
import * as TRANSACTION_EVENTS from './transaction';
import * as RECEIPT_EVENTS from './receipt';

export const EVENTS = {
  BLOCK: BLOCK_EVENTS,
  TRANSACTION: TRANSACTION_EVENTS,
  RECEIPT: RECEIPT_EVENTS,
};

export default new PubSub();
