import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getSubscriptionContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const useSetSubAmt = (amount: number | undefined) => {
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
      // const amountInWei =
      //   amount !== undefined ? ethers.parseEther(amount.toString()) : 0;
      // const amountInWei = ethers.formatEther(amount);

      const transaction = await contract.setMonthlySubscriptionAmount(amount);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Set subscription amount successful!");
      }

      console.log("receipt: ", receipt);

      toast.error("Set subscription amount failed!");
    } catch (error: unknown) {
      console.log(error);
    }
  }, [amount, chainId, walletProvider]);
};

export default useSetSubAmt;
