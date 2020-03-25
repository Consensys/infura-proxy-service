# Infura Proxy Service

The Infura Proxy Service is demonstrates how to build a caching layer for an Ethereum application.

**Why**

Blockchain hold large amounts of data. Service providers like Infura help developers access that data. Browsers can directly request from Inufra, but this leads to higher costs, due to the significant request traffic generate from each user.

**How**

The Infura Proxy Service acts as a caching layer between Frontend Application and Infura Service endpoints.

# Overview

The Infura Proxy Service provides a data caching layer that between frontend application and Infura endpoints. By routing requests via a proxy service developers/businesses can better manage costs and even also gain insights into what data is actually being requested by users. Often times the same blockchain data is requested 10's, 100's and likely 1,000's of times before it's "stale" or no longer important state.

The `infura-proxy-service` is a basic implementation. Demonstrating how to cache `transaction` and `receipt` requests made from the a frontend application to a blockchain node service provider - in this instance the node provider is Infura.

## Models

The `infura-proxy-service` repo includes several models for storing common blockchain data.

- Transaction
- Receipt
- ENS

Each model matches the data structure of succesful JSON-RPC data calls associated with `"GET_TRANSACTION"`, `"GET_RECEIPT"`

## Routes

The server is divded into 2 primary application routes:

- infura
- cache

The `infura` route(s) provide a "direct line" to the Inufra API endpoints. The routes exists primarily for demonstration purposes, but it's also conceivable an application might want to limit data calls to authenicated users. In other words, additional middleware could be added to the `express` server routes to limit access to the Infura endpoints.

The `cache` route(s) are similar to several of the `infura` routes, but instead of directly calling the Infura API endpoints, the database is first queried for the relevant data (transactions and transaction receipts). If the database returns `null` then an additional request is dispatched to Infura services to retrieve the requested blockchain data. If Infura returns the data, it's passed back to the requesting application and also stored in the caching layer (postgres) for future requests.

### Infura

- /block
- /gas
- /transaction/:hash
- /receipt/:hash
- /ens/resolve/:name
- /ens/lookup/:address

### Cache

- /cache/transaction/:hash
- /cache/receipt/:hash
