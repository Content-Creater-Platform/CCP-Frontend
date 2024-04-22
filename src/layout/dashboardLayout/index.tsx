import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { menu } from "../../constants/data.ts";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Flex h="100vh">
      <Box
        w="300px"
        h="100vh"
        py={"2rem"}
        px={"1.8rem"}
        bg={"#171717"}
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        <Box mb={"3rem"}>
          <Text>LOGO</Text>
        </Box>

        <Flex flexDirection={"column"} justify={"space-between"} h={"86%"}>
          <Flex flexDirection={"column"} gap={".5rem"}>
            {menu.map((item, index) => (
              <NavLink to={item.link} key={index} className="activeClassName">
                <Text fontSize={".9rem"} p={"1rem"}>
                  {item.title}
                </Text>
              </NavLink>
            ))}
          </Flex>
          <Flex flexDirection={"column"} align={"start"}>
            <Box mb={"1rem"}>
              <w3m-button />
            </Box>
            <Link href="#" _hover={{ color: "#fff" }} fontSize={".8rem"}>
              FAQ & Help Center
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
