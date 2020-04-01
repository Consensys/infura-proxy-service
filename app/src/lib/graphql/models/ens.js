/* ----------------------- */
/* ENS Model
/* ----------------------- */
const ens = (sequelize, DataTypes) => {
  const ENS = sequelize.define('ens', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    records: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
  });

  return ENS;
};

export default ens;
