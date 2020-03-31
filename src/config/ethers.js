/* --- Global --- */
import { ethers } from 'ethers';

/* ============================================== */
// Configuration
/* ============================================== */

const { INFURA_PUBLIC, ETHEREUM_NETWORK } = process.env;

export const setupInufraProvider = () => {
  const provider = new ethers.providers.InfuraProvider(
    ETHEREUM_NETWORK,
    INFURA_PUBLIC
  );
  return provider;
};
