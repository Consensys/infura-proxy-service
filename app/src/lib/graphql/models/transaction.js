/* ----------------------- */
/* Transaction Model
/* ----------------------- */
const transaction = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    hash: {
      type: DataTypes.STRING,
    },
    blockHash: {
      type: DataTypes.STRING,
    },
    blockNumber: {
      type: DataTypes.INTEGER,
    },
    transactionIndex: {
      type: DataTypes.INTEGER,
    },
    confirmations: {
      type: DataTypes.INTEGER,
    },
    from: {
      type: DataTypes.STRING,
    },
    gasPrice: {
      type: DataTypes.JSONB,
    },
    gasLimit: {
      type: DataTypes.JSONB,
    },
    to: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.JSONB,
    },
    nonce: {
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.TEXT,
    },
    r: {
      type: DataTypes.STRING,
    },
    s: {
      type: DataTypes.STRING,
    },
    v: {
      type: DataTypes.INTEGER,
    },
    networkId: {
      type: DataTypes.INTEGER,
    },
    chainId: {
      type: DataTypes.INTEGER,
    },
  });

  return Transaction;
};

export default transaction;
