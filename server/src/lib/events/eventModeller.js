// import { convertSolidityType } from "./solidityType"
import Sequelize from 'sequelize';

import database from '@database';

const event = () => {

    let eventSchema = {
        transactionHash: {
            type: Sequelize.STRING,
        },
        eventTopicHash: {
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
        },
        jsonEvent: {
            type: Sequelize.JSONB
        }
    }

    const Event = database.define("event", eventSchema);
    console.log(Event.tableName)
    return Event;
};

export default event;
