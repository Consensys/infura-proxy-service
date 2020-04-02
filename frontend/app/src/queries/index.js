import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`;

/* ----------------------- */
// Transaction : Query
/* ----------------------- */
export const GET_TRANSACTION = gql`
  query($hash: ID!) {
    transaction(hash: $hash) {
      hash
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query($limit: Int) {
    transactions(limit: $limit) {
      hash
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const TRANSACTION_CREATED = gql`
  subscription {
    transactionCreated {
      transaction {
        hash
        blockHash
        blockNumber
        to
        from
        data
        gasLimit {
          _hex
        }
        gasPrice {
          _hex
        }
        transactionIndex
        nonce
        confirmations
      }
    }
  }
`;

/* ----------------------- */
// Block : Query
/* ----------------------- */
export const GET_BLOCK = gql`
  query($hash: ID!) {
    block(hash: $hash) {
      hash
      parentHash
      hash
      parentHash
      number
      timestamp
      nonce
      difficulty
      gasLimit {
        _hex
      }
      gasUsed {
        _hex
      }
      miner
      extraData
      transactions
    }
  }
`;

export const GET_BLOCKS = gql`
  query($limit: Int) {
    blockList(limit: $limit) {
      hash
      parentHash
      hash
      parentHash
      number
      timestamp
      nonce
      difficulty
      gasLimit {
        _hex
      }
      gasUsed {
        _hex
      }
      miner
      extraData
      transactions
    }
  }
`;

export const BLOCK_CREATED = gql`
  subscription {
    blockCreated {
      block {
        hash
        parentHash
        hash
        parentHash
        number
        timestamp
        nonce
        difficulty
        gasLimit {
          _hex
        }
        gasUsed {
          _hex
        }
        miner
        extraData
        transactions
      }
    }
  }
`;
