/* ----------------------- */
/* Block Model
/* ----------------------- */
const block = (sequelize, DataTypes) => {
  const Block = sequelize.define('block', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    hash: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    difficulty: {
      type: DataTypes.BIGINT,
    },
    timestamp: {
      type: DataTypes.BIGINT,
    },
    nonce: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.STRING,
    },
    miner: {
      type: DataTypes.STRING,
    },
    gasLimit: {
      type: DataTypes.JSONB,
    },
    gasUsed: {
      type: DataTypes.JSONB,
    },
    transactions: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
  });

  return Block;
};

export default block;
