/* ----------------------- */
/* Event Metadata Model
/* ----------------------- */
const eventMeta = (sequelize, DataTypes) => {
  const EventMeta = sequelize.define('event_meta', {
    event_topic_hash: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    event_name: {
      type: DataTypes.STRING,
    },
    event_bare_name: {
      type: DataTypes.STRING,
    },
    event_abi: {
      type: DataTypes.JSONB,
    },
  });

  return EventMeta;
};

export default eventMeta;
