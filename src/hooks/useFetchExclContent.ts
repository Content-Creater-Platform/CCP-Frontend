import { useCallback, useState } from "react";
import { getContentContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

interface ContentItem {
  title?: string;
  id?: number;
  dateCreated?: number;
  creatorProfile?: string;
  ipfsHash?: string;
  creator?: string;
  isDeleted?: boolean;
  isMonetized?: boolean;
  views?: number;
  likes?: number;
  dislikes?: number;
  shares?: number;
  rating?: number;
  contentType?: string;
  creatorImage?: string;
}

interface State {
  loading: boolean;
  data?: ContentItem[] | any;
  error?: string;
}

const useFetchExclContent = (): [State, (creator: string) => void] => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [content, setContent] = useState<State>({
    loading: true,
    data: null,
    error: undefined,
  });

  const fetchContent = useCallback(
    async (creator: string) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getContentContract(signer);
      try {
        const contentItems = await contract.fetchExclusiveContent(creator);
        setContent({
          loading: false,
          data: contentItems,
          error: undefined,
        });
      } catch (err: any) {
        setContent({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    },
    [chainId, walletProvider]
  );

  return [content, fetchContent];
};

export default useFetchExclContent;
