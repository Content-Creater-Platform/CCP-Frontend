import { Button } from "@chakra-ui/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <w3m-button />
      ) : (
        <Button
          bgGradient="linear(to-r, #04A67D, #24B1B6)"
          borderRadius={"100rem"}
          border={"none"}
          color={"#fff"}
          transition={"all .5s ease-in-out"}
          w={"150px"}
          _hover={{
            bgGradient: "linear(to-r, #04A67D, #24B1B6)",
            border: "none",
          }}
          _focus={{ outline: "none" }}
          onClick={() => open()}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
