import sequelize from '@lib/database';

const models = {
  // Application
  User: sequelize.import('./users'),
  // Ethereum
  Transaction: sequelize.import('./transaction'),
  Receipt: sequelize.import('./receipt'),
  ENS: sequelize.import('./ens'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
