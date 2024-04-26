import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const Content = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
        <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
          <Img
            src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            w={"50px"}
            h={"50px"}
            borderRadius={"100%"}
            alt="image"
          />
          <Flex align={"end"} gap={".4rem"}>
            <Box>
              <Text color={"#B1B1B1"} fontSize={".9rem"}>
                @Muhadrehh
              </Text>
              <Text>Muhadreh Kumbirai</Text>
            </Box>
            <Text color={"#15AB99"}>. 1 hr ago</Text>
          </Flex>
        </Flex>
        <Img
          mb={"1rem"}
          src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="image"
          borderRadius={".5rem"}
        />
        <Flex justify={"space-between"}>
          <Box></Box>
          <Box
            borderRadius={"50rem"}
            px={"1rem"}
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            free
          </Box>
        </Flex>
      </GridItem>
      <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
        <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
          <Img
            src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            w={"50px"}
            h={"50px"}
            borderRadius={"100%"}
            alt="image"
          />
          <Flex align={"end"} gap={".4rem"}>
            <Box>
              <Text color={"#B1B1B1"} fontSize={".9rem"}>
                @Muhadrehh
              </Text>
              <Text>Muhadreh Kumbirai</Text>
            </Box>
            <Text color={"#15AB99"}>. 1 hr ago</Text>
          </Flex>
        </Flex>
        <Img
          mb={"1rem"}
          src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="image"
          borderRadius={".5rem"}
        />
        <Flex justify={"space-between"}>
          <Box></Box>
          <Box
            borderRadius={"50rem"}
            px={"1rem"}
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            free
          </Box>
        </Flex>
      </GridItem>
      <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
        <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
          <Img
            src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            w={"50px"}
            h={"50px"}
            borderRadius={"100%"}
            alt="image"
          />
          <Flex align={"end"} gap={".4rem"}>
            <Box>
              <Text color={"#B1B1B1"} fontSize={".9rem"}>
                @Muhadrehh
              </Text>
              <Text>Muhadreh Kumbirai</Text>
            </Box>
            <Text color={"#15AB99"}>. 1 hr ago</Text>
          </Flex>
        </Flex>
        <Img
          mb={"1rem"}
          src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="image"
          borderRadius={".5rem"}
        />
        <Flex justify={"space-between"}>
          <Box></Box>
          <Box
            borderRadius={"50rem"}
            px={"1rem"}
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            free
          </Box>
        </Flex>
      </GridItem>
      <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
        <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
          <Img
            src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            w={"50px"}
            h={"50px"}
            borderRadius={"100%"}
            alt="image"
          />
          <Flex align={"end"} gap={".4rem"}>
            <Box>
              <Text color={"#B1B1B1"} fontSize={".9rem"}>
                @Muhadrehh
              </Text>
              <Text>Muhadreh Kumbirai</Text>
            </Box>
            <Text color={"#15AB99"}>. 1 hr ago</Text>
          </Flex>
        </Flex>
        <Img
          mb={"1rem"}
          src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="image"
          borderRadius={".5rem"}
        />
        <Flex justify={"space-between"}>
          <Box></Box>
          <Box
            borderRadius={"50rem"}
            px={"1rem"}
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            free
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Content;
