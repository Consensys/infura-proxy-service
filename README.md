# Infura Proxy Service

The Infura Proxy Service is demonstrates how to build a caching layer for an Ethereum application.

**Why**

Blockchain hold large amounts of data. Service providers like Infura help developers access that data. Browsers can directly request from Inufra, but this leads to higher costs, due to the significant request traffic generate from each user.

**How**

The Infura Proxy Service acts as a caching layer between Frontend Application and Infura Service endpoints.

## Install:

```
[Docker](https://www.docker.com/)
```

```
[Node v10.X](https://nodejs.org/en/)
```

```
[Npm](https://docs.npmjs.com/getting-started/installing-node)
[Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
```

```
$ git clone https://github.com/kamescg/infura-proxy-service docker-express-postgresql-react-starter
$ cd infura-proxy-service
$ npm install || yarn
```

## Usage

START

```
$ docker-compose up
```

STOP

```
$ docker-compose down
```

Docker will initialize 2 services:

- PostgreSQL Database
- pgAdmin (PostgreSQL Tool)

The services will be initialized using parameters included in the .env file.

- PostgreSQL: `http://localhost:3131/
  - username: `infura`
  - password: `infura`
- pgAdmin: http://127.0.0.1:5050/
  - username: `infura`
  - password: `infura`

The pgAdmin dashboard requires authentication with PostgreSQL Database.

Click `Add New Server` and enter the following details

- Name: `infura` // Recommended Name
- Host name/Address: `postgres`
- Port: `5432`
- username: `infura`
- password: `infura`

# Overview

The Infura Proxy Service provides a data caching layer that between frontend application and Infura endpoints. By routing requests via a proxy service developers/businesses can better manage costs and even also gain insights into what data is actually being requested by users. Often times the same blockchain data is requested 10's, 100's and likely 1,000's of times before it's "stale" or no longer important state.

The `infura-proxy-service` is a basic implementation. Demonstrating how to cache `transaction` and `receipt` requests made from the a frontend application to a blockchain node service provider - in this instance the node provider is Infura.

## Models

The `infura-proxy-service` repo includes several core models for storing common blockchain data.

- Block
- Transaction
- Receipt
- ENS

Each model matches the data structure of succesful JSON-RPC data calls associated with `"GET_TRANSACTION"`, `"GET_RECEIPT"`

In addition to the core (_Block, Transaction, Receipt, ENS_) database models, smart contact specific database models are created when the server is initialized. By automatically generating models using smart contract artifacts (ABI JSON files) developers can avoid manually creating new Postgres database models for new/existing smart contracts.

Simplifying the process for creating a `cahcing` servie for specific smart contracts.

Add smart contract.

## Routes

The server is includes 3 core application routes:

- events
- infura
- cache

### Events

The `events` route(s) is a static route, but outputs are determined by the smart contracts provided at server runtime.

- /events
- /event/[INSERT_EVENT_NAME]

### Infura

The `infura` route(s) provide a "direct line" to the Inufra API endpoints. The routes exists primarily for demonstration purposes, but it's also conceivable an application might want to limit data calls to authenicated users. In other words, additional middleware could be added to the `express` server routes to limit access to the Infura endpoints.

- /block
- /gas
- /transaction/:hash
- /receipt/:hash
- /ens/resolve/:name
- /ens/lookup/:address

### Cache

The `cache` route(s) are similar to several of the `infura` routes, but instead of directly calling the Infura API endpoints, the database is first queried for the relevant data (transactions and transaction receipts). If the database returns `null` then an additional request is dispatched to Infura services to retrieve the requested blockchain data. If Infura returns the data, it's passed back to the requesting application and also stored in the caching layer (postgres) for future requests.

- /cache/transaction/:hash
- /cache/receipt/:hash

# Troubleshoot

Scan for Existing Postgres Containers
`lsof -n -i:5432 | grep LISTEN`
