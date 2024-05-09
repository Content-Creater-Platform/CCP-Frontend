import { useEffect, useState } from "react";
import { getSubscriptionContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";

interface subscriberInfo {
  username: string;
  addr: `0x${string}` | undefined;
}

interface State {
  loading: boolean;
  data?: subscriberInfo;
  error?: string;
}

const useGetMySubscribers = (addr: `0x${string}` | undefined): State => {
  const [info, setInfo] = useState<State>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const contract = getSubscriptionContract(readOnlyProvider);
        const subscribersInfo = await contract.fetchSubscribers(addr);
        setInfo({
          loading: false,
          data: subscribersInfo.map((item: any) => ({
            username: item.username,
            addr: item.walletAddress,
          })),
          error: undefined,
        });
      } catch (err: any) {
        setInfo({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    };

    fetchInfo();
  }, [addr]);

  return info;
};

export default useGetMySubscribers;
