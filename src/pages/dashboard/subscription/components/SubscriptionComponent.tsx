import { Card, Box, Flex } from "@chakra-ui/react";
import "../../../../App.css";
import { Subscribe } from "./Subscribe";
import { SetSubAmt } from "./SetSubAmt";
import { Approve } from "./Approve";
import MySubscribers from "./MySubscribers";
import SubscribedTo from "./SubscribedTo";
import CreatorsList from "./CreatorsList";

const SubscriptionComponent = () => {
  return (
    <Box color="#fff" boxShadow="2xl" transition={"all .5s ease-in-out"} p={5}>
      <Flex flexDirection={"column"} gap={"3rem"}>
        <Card
          bg="#1d1d1e"
          color="#fff"
          transition={"all .5s ease-in-out"}
          p={"1rem"}
        >
          <Flex gap={"1rem"} flexDirection={"row"} alignItems={"end"}>
            <Approve />
            <Subscribe />
            <SetSubAmt />
          </Flex>
        </Card>
        <Box>
          <MySubscribers />
        </Box>
        <Box>
          <SubscribedTo />
        </Box>
        <Box>
          <CreatorsList />
        </Box>
      </Flex>
    </Box>
  );
};

export default SubscriptionComponent;
