import { OPTIMISM_SEPOLIA_ID, OPTIMISM_ID } from "../connection";
import { getAuthContract } from "../constants/contract";
import { getProvider } from "../constants/provider";

export const isSupportedChain = (chainId: unknown) =>
  Number(chainId) === OPTIMISM_ID || OPTIMISM_SEPOLIA_ID;

export const getReadWriteAuthContract = async (provider: never) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getAuthContract(signer);
};
