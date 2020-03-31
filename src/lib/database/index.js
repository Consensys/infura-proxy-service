import Sequelize from 'sequelize';

console.log(
  process.env.DATABASE_URL,
  process.env.TEST_DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  'process.env.DATABASE_URL'
);
let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      freezeTableName: true, //prevent sequelize from pluralizing table names
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.TEST_DATABASE || process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
      define: {
        freezeTableName: true, //prevent sequelize from pluralizing table names
      },
      // logging: false // prevent SQL logging to console
    }
  );
}

export default sequelize;
