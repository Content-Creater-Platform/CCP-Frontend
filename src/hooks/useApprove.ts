import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getTokenContract, getVaultContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";
import { ethers } from "ethers";

const useApprove = (amount: number | undefined) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (chainId === undefined)
      return toast.error("Please connect your wallet first");
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const vaultContract = getVaultContract(signer);
    const contract = getTokenContract(signer);

    const convertToSmallestUnit = (amount: number): ethers.BigNumberish => {
      return ethers.parseUnits(amount.toString(), 18);
    };
    try {
      const convertedAmount = convertToSmallestUnit(amount || 0);

      const transaction = await contract.approve(
        vaultContract.target,
        convertedAmount
      );
      const receipt = await transaction.wait();

      if (!receipt.status) {
        toast.error("Approval failed!");
        return;
      }

      toast.success("Approval successful!");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while approving.");
    }
  }, [amount, chainId, walletProvider]);
};

export default useApprove;
