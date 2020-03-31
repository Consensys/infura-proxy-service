// import { convertSolidityType } from "./solidityType"
import Sequelize from 'sequelize';

import database from '@database';

const event = (topicHash) => {

    let eventSchema = {
        transactionHash: {
            type: Sequelize.STRING,
        },
        contractAddress: {
            type: Sequelize.STRING,
        },
        eventABI: {
            type: Sequelize.JSONB
        },
        rawEvent: {
            type: Sequelize.JSONB
        }
    }

    const Event = database.define(topicHash, eventSchema);

    return Event;
};

export default event;
