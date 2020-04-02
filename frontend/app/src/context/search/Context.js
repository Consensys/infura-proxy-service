/**
 * @name EthersContext
 * @description Initialize Ethers context.
 */

import {createContext} from 'react';

const Context = createContext({
  initialized: false,
});

export default Context;
