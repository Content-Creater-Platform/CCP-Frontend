import { Box, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { contact } from "../../../../constants/data";

const Contact = () => {
  return (
    <Box>
      <Flex justify={"space-between"} align={"center"}>
        <Box w={"100%"}>
          <Image src="./images/contact_asset.png" alt="img" />
        </Box>
        <Box w={"100%"}>
          <Heading
            className="font"
            as="h1"
            size="xl"
            noOfLines={2}
            mb="40px"
            color={"#e9ecef"}
          >
            Need help with anything on Cre8ify?
          </Heading>
          <Flex
            mb={"1rem"}
            color={"#b7b5c8"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            {contact.map((item, index) => (
              <Link
                bg={"#1d1a27"}
                px={"1rem"}
                py={"1rem"}
                display={"inline-flex"}
                alignItems={"center"}
                gap={".5rem"}
                href={item.url}
                key={index}
                fontSize={"1.1rem"}
                border={"1px solid #9f51c6"}
                borderRadius={"1rem"}
                _hover={{ color: "#b7b5c8" }}
              >
                <Icon as={item.icon} />
                <Text>{item.text}</Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
