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
import { setupInufraProvider } from './config/ethers';

/* --- Application Routes --- */
import { initInfuraQueryRoutes } from './routes';

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

/* --- Application API --- */

/* --- Server Middleware  --- */
initServer(app, httpServer);
initInfuraQueryRoutes(app);
initSequalize();
