import { PubSub } from 'apollo-server';

import * as BLOCK_EVENTS from './block';
import * as CONTRACT_EVENTS from './contract';
import * as EVENTS_EVENTS from './event';
import * as EVENT_META_EVENTS from './eventMeta';
import * as TRANSACTION_EVENTS from './transaction';
import * as RECEIPT_EVENTS from './receipt';

export const EVENTS = {
  BLOCK: BLOCK_EVENTS,
  CONTRACT: CONTRACT_EVENTS,
  EVENT: EVENTS_EVENTS,
  EVENT_META: EVENT_META_EVENTS,
  TRANSACTION: TRANSACTION_EVENTS,
  RECEIPT: RECEIPT_EVENTS,
};

export default new PubSub();
