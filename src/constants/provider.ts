import { ethers } from "ethers";

// read only provider pointing to sepolia. It allows read only access to the sepolia blockchain
export const readOnlyProvider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_mainnet_rpc_url,
  import.meta.env.VITE_sepolia_rpc_url
);

// read/write provider, that allows you to read data and also sign transaction on whatever chain it's pointing to
export const getProvider = (provider: never) =>
  new ethers.BrowserProvider(provider);
