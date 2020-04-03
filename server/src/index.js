/* --- Runtime --- */
import 'dotenv/config';
import 'module-alias/register';

/* --- Global --- */
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

/* --- Server : Configuration --- */
import { initServer } from '@database/apollo';
import { initSequalize } from '@database/sequelize';
import { initContracts } from '@events';

import { setupInufraProvider } from '@config';

import { listenEthBlock } from '@listeners';

/* --- Application Routes --- */
import {
  initCoreRoutes,
  initCacheRoutes,
  initEventRoutes,
  initContractRoutes
} from './routes';

const provider = setupInufraProvider();
/* ----------------------- */
// Express Server
/* ----------------------- */
const app = express();
const httpServer = http.createServer(app);
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())

// Set Request Constants
app.set('provider', provider);

// Initialize Server
const port = process.env.PORT || 8000;
httpServer.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});

const {
  FEAUTRE_ROUTE_CORE,
  FEAUTRE_ROUTE_CACHING,
  FEAUTRE_ROUTE_CONTRACTS,
  FEAUTRE_LISTEN_BLOCKS,
} = process.env;

const main = async () => {
  /* --- Server Middleware  --- */
  initServer(app, httpServer);

  /* --- Sequelize Config --- */
  await initSequalize();

  /* --- Application Routes  --- */
  if (Number(FEAUTRE_ROUTE_CORE)) initCoreRoutes(app);
  if (Number(FEAUTRE_ROUTE_CACHING)) initCacheRoutes(app);
  initEventRoutes(app);
  initContractRoutes(app);


  /* --- Contracts Config --- */
  if (Number(FEAUTRE_ROUTE_CONTRACTS))
    await initContracts(process.env.CONTRACT_DIR, provider);

  // await initEvents(provider)
};

const listen = async () => {
  if (Number(FEAUTRE_LISTEN_BLOCKS)) listenEthBlock();
};

main();
listen();
