import database from '@database';

/* --- Specific Database Connection --- */
const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;

const reset = Number(process.env.DATABASE_RESET_ON_SAVE);

export const initSequalize = async () => {
  /**
   * @function Sequalize.sync
   * @description Initialize the connection to the Postgres Database
   */

  await database.sync({ force: reset });
  console.log('Database Initialized');
};
