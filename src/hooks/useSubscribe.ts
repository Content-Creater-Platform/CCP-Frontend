import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getSubscriptionContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const useSubscribe = (creatorAddr: string, amount: number | undefined) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (chainId === undefined)
      return toast.error("Please connect your wallet first");
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getSubscriptionContract(signer);

    try {
      const transaction = await contract.subscribeToCreator(
        creatorAddr,
        amount
      );
      const receipt = await transaction.wait();

      if (receipt.status) {
        toast.success("Subscription successful!");
      } else {
        toast.error("Subscription failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while subscribing.");
    }
  }, [amount, chainId, creatorAddr, walletProvider]);
};

export default useSubscribe;
