import database from '@database';

/* --- Specific Database Connection --- */
const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;
export const initSequalize = async () => {
  /**
   * @function Sequalize.sync
   * @description Initialize the connection to the Postgres Database
   */

  await database.sync({ force: isTest || isProduction })
  console.log("Database Initialized")

};
