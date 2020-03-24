# Infura Proxy Service

The Infura Proxy Service is demonstrates how to build a caching layer for an Ethereum application.

**Why**

Blockchain hold large amounts of data. Service providers like Infura help developers access that data. Browsers can directly request from Inufra, but this leads to higher costs, due to the significant request traffic generate from each user.

**How**

The Infura Proxy Service acts as a caching layer between Frontend Application and Infura Service endpoints.

# Overview

The Infura Proxy Service provides a data caching layer between frontend application and Infura endpoints, because often times the same data is requested 10's, 100's and likely 1,000's of times from different users.

By routing requests via a proxy service application's can better manage costs and also gain insights into what data is actually being requested by users.

## Routes

The application is divded into 2 primary application routes: infura and query.

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
