import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getContentContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const getContentType = (fileExtension: any) => {
  const imageExtensions = ["jpg", "jpeg", "png", "gif"];
  const videoExtensions = ["mp4", "avi", "mov"];
  const audioExtensions = ["mp3", "wav", "ogg"];

  if (imageExtensions.includes(fileExtension)) {
    return "image";
  } else if (videoExtensions.includes(fileExtension)) {
    return "video";
  } else if (audioExtensions.includes(fileExtension)) {
    return "audio";
  } else {
    return "unknown";
  }
};

const useCreateFreeContent = (
  title: string,
  ipfsHash: string,
  fileExtension: string,
  username: string,
  creatorImage: string
) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (chainId === undefined)
      return toast.error("Please connect your wallet first");
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getContentContract(signer);

    try {
      const contentType = getContentType(fileExtension);
      if (contentType === "unknown") {
        console.error("Unknown file extension");
        return null;
      }
      const transaction = await contract.createFreeContent(
        title,
        ipfsHash,
        contentType,
        username,
        creatorImage
      );
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);
    } catch (error: unknown) {
      console.log(error);
    }
  }, [
    chainId,
    walletProvider,
    fileExtension,
    title,
    ipfsHash,
    username,
    creatorImage,
  ]);
};

export default useCreateFreeContent;
