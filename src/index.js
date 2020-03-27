/* --- Runtime --- */
import 'dotenv/config';
import 'module-alias/register';

/* --- Global --- */
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import http from 'http';

/* --- Server : Configuration --- */
import { initServer } from '@database/apollo';
import { initSequalize } from '@database/sequelize';
import { initContracts, initEvents } from '@events/contracts';

import { setupInufraProvider } from './config/ethers';

/* --- Application Routes --- */
import { initInfuraQueryRoutes, initCacheRoutes, initEventRoutes } from './routes';

const provider = setupInufraProvider();
/* ----------------------- */
// Express Server
/* ----------------------- */
const app = express();
const httpServer = http.createServer(app);
app.use(cors());
app.use(morgan('dev'));

// Set Request Constants
app.set('provider', provider);

// Initialize Server
const port = process.env.PORT || 8000;
httpServer.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});

(async () => {
  /* --- Server Middleware  --- */
  initServer(app, httpServer);

  /* --- Application Routes  --- */
  initInfuraQueryRoutes(app);
  initCacheRoutes(app);
  initEventRoutes(app)
  
  /* --- Sequelize Config --- */
  initSequalize();

  /* --- Contracts Config --- */
  await initContracts(process.env.CONTRACT_DIR)

  await initEvents(provider)

})()
