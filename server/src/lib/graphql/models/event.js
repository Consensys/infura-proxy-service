/* ----------------------- */
/* ENS Model
/* ----------------------- */
const event = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    transaction_hash: {
      type: DataTypes.STRING,
    },
    event_topic_hash: {
      type: DataTypes.STRING,
    },
    contract_address: {
      type: DataTypes.STRING,
    },
    event_abi: {
      type: DataTypes.JSONB,
    },
    raw_event: {
      type: DataTypes.JSONB,
    },
    json_event: {
      type: DataTypes.JSONB,
    },
  });

  return Event;
};

export default event;
