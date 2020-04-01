import { convertSolidityType } from "./solidityType"
import Sequelize from 'sequelize';

import database from '@database';

const event = (eventABI) => {

    let eventSchema = {
        transactionHash: {
            type: Sequelize.STRING,
        }
    }

    // 1 Parse name
    let name = eventABI.name

    // 2 get inputs into type schema
    eventABI.inputs.forEach(input => {
        let t = convertSolidityType(input.type)
        let iName = input.name
        eventSchema[iName] = {
            type: t
        }
    });

    const Event = database.define(name, eventSchema);

    return Event;
};

export default event;
