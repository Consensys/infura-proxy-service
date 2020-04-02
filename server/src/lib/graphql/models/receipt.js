/* ----------------------- */
/* Receipt Model
/* ----------------------- */
const receipt = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('receipt', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    to: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    contractAddress: {
      type: DataTypes.STRING,
    },
    blockHash: {
      type: DataTypes.STRING,
    },
    blockNumber: {
      type: DataTypes.INTEGER,
    },
    logs: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    confirmations: {
      type: DataTypes.INTEGER,
    },
    gasUsed: {
      type: DataTypes.JSONB,
    },
    cumulativeGasUsed: {
      type: DataTypes.JSONB,
    },
    byzantium: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Receipt;
};

export default receipt;
