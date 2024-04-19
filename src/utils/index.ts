import { SUPPORTED_CHAIN } from "../connection";

export const isSupportedChain = (chainId: any) =>
  Number(chainId) === SUPPORTED_CHAIN;
