import sequelize from '@lib/database';

const models = {
  // Application
  User: sequelize.import('./users'),
  // Ethereum
  Block: sequelize.import('./block'),
  Transaction: sequelize.import('./transaction'),
  Receipt: sequelize.import('./receipt'),
  ENS: sequelize.import('./ens'),
  // Event
  Event: sequelize.import('./event'),
  EventMeta: sequelize.import('./eventMeta'),

};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// export { sequelize };

export default models;
