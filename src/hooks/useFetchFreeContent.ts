import { useEffect, useState } from "react";
import { getContentContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
  creatorImage: string;
}

interface State {
  loading: boolean;
  data?: ContentItem;
  error?: string;
}

const useFetchFreeContent = (): State => {
  // const [lastId, setLastId] = useState(0);
  const [content, setContent] = useState<State>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contract = getContentContract(readOnlyProvider);
        const contentItems = await contract.fetchFreeContent(); // Assuming this returns an array of ContentItem
        setContent({
          loading: false,
          data: contentItems.map((item: any) => ({
            title: item.title,
            id: item.id,
            dateCreated: item.dateCreated,
            creatorProfile: item.creatorProfile,
            ipfsHash: item.ipfsHash,
            creator: item.creator,
            isDeleted: item.isDeleted,
            isMonetized: item.isMonetized,
            views: item.views,
            likes: item.likes,
            dislikes: item.dislikes,
            shares: item.shares,
            rating: item.rating,
            contentType: item.contentType,
            creatorImage: item.creatorImage,
          })),
          error: undefined,
        });
      } catch (err: any) {
        setContent({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    };

    fetchContent();
  }, []);

  return content;
};

export default useFetchFreeContent;
