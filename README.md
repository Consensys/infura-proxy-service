# Infura Proxy Service

The Infura Proxy Service is demonstrates how to build a caching layer for an Ethereum application.

**Why**

Blockchain hold large amounts of data. Service providers like Infura help developers access that data. Browsers can directly request from Inufra, but this leads to higher costs, due to the significant request traffic generate from each user.

**How**

The Infura Proxy Service acts as a caching layer between `User <> Application (Caching) <> Infura <> Blockchain`

# Overview

## Routes

- /block
- /gas
- /transaction/:hash
- /receipt/:hash
- /ens/resolve/:name
- /ens/lookup/:address
