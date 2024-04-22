import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <Box
      h={"100vh"}
      overflowY={"auto"}
      overflowX={"hidden"}
      py={"2.5rem"}
      px={"1.5rem"}
    >
      <Flex>
        <Text>Home</Text>
      </Flex>
    </Box>
  );
};

export default Home;
