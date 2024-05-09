import { Box, Image, Text } from "@chakra-ui/react";
import useGetRegUsers from "../../../../hooks/useGetRegUsers";
import useFetchExclContent from "../../../../hooks/useFetchExclContent";
// import { useState } from "react";

interface RegUser {
  username: string;
  walletAddress: string;
  profileImage: string;
}

const AllUser = () => {
  // const [exContent, setExContent] = useState("");
  const allUsers = useGetRegUsers();
  const [content, fetchContent] = useFetchExclContent();

  const handleUserClick = (creator: string) => {
    fetchContent(creator);
  };
  // console.log("Content", content);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
      {(allUsers as RegUser[]).map((item, index) => (
        <Box
          onClick={() => handleUserClick(item.walletAddress)}
          key={index}
          display={"flex"}
          alignItems={"center"}
          gap={".7rem"}
        >
          <Image
            w={"50px"}
            h={"50px"}
            objectFit={"cover"}
            borderRadius={"full"}
            src={`https://${item.profileImage}`}
            alt=""
          />
          <Box>
            <Text fontSize={".9rem"}>{item.username}</Text>
            <Text color={"gray"} fontSize={".9rem"}>
              {item.walletAddress}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllUser;
