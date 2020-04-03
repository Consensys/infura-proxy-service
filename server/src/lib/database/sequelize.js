import database from '@database';

/* --- Specific Database Connection --- */
const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;
export const initSequalize = () => {
  /**
   * @function Sequalize.sync
   * @description Initialize the connection to the Postgres Database
   */
  database.sync({ force: !isTest || isProduction }).then(async () => {
    console.warn('Database Initialized');
  });
};
