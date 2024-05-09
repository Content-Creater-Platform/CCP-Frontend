import {
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  FormControl,
  Modal,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import useApprove from "../../../../hooks/useApprove";

export const Approve = () => {
  const [amount, setAmount] = useState<number | undefined>();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleSubscribe = useApprove(amount || 0);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}

        <ModalContent bg={"#262628"} className="font">
          <ModalHeader>Approve DApp to spend</ModalHeader>
          <ModalCloseButton
            _focus={{ outline: "none" }}
            _hover={{ border: "1px solid #15AB99" }}
          />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                required
                placeholder="Amount"
                // value={amount}
                _placeholder={{ color: "#767677" }}
                size="md"
                border={"1px solid #535354"}
                outline={"none"}
                _hover={{ outline: "none" }}
                _focus={{ boxShadow: "none" }}
                px={".5rem"}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              borderRadius={".7rem"}
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"150px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
              onClick={() => {
                handleSubscribe();
              }}
            >
              <Text>Approve</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button
        bgGradient="linear(to-r, #04A67D, #24B1B6)"
        borderRadius={".7rem"}
        border={"none"}
        color={"#fff"}
        transition={"all .5s ease-in-out"}
        w={"150px"}
        _hover={{
          bgGradient: "linear(to-r, #04A67D, #24B1B6)",
          border: "none",
        }}
        _focus={{ outline: "none" }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <Text>Approve</Text>
      </Button>
    </>
  );
};
