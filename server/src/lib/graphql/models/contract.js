/* ----------------------- */
/* Contract Model
/* ----------------------- */
const contract = (sequelize, DataTypes) => {
    const Contract = sequelize.define('contract', {
      address: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      abi: {
        type: DataTypes.JSONB,
      },
      event_topics: {
        type: DataTypes.JSONB, // an array of event topic hashes
      },
    });
  
    return Contract;
  };
  
  export default contract;
  