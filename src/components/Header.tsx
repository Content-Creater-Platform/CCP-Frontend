import { Flex } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";

export default function Header() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <div>LOGO</div>
      <ConnectButton />
    </Flex>
  );
}
