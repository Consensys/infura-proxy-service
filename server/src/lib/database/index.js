import Sequelize from 'sequelize';

let logging = !!Number(process.env.FEAUTRE_LOG_SQL);

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: process.env.DATABASE_URL,
    // host: process.env.DATABASE_HOST,
    define: {
      freezeTableName: true, //prevent sequelize from pluralizing table names
    },
    logging,
  });
} else {
  sequelize = new Sequelize(
    process.env.TEST_DATABASE || process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
      // host: process.env.DATABASE_HOST || 'localhost',
      define: {
        freezeTableName: true,
      },
      logging,
    }
  );
}

export default sequelize;
