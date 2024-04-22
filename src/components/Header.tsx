import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <div>Meta NFT</div>
      <w3m-button />
    </Flex>
  );
}
