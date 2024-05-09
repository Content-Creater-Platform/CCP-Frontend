import {
  Box,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { EditProfile } from "./EditProfile";
import { useState } from "react";
import useGetUserDetails from "../hooks/useGetUserDetails";

const ProfileDetails = () => {
  const { data: userDetails, loading, error } = useGetUserDetails();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlayTwo, setOverlayTwo] = useState(<OverlayTwo />);
  return (
    <Box>
      <Box>
        <Box
          bg={"#262628"}
          px={".5rem"}
          py={".5rem"}
          boxShadow={"0 0 0 1px #2f2f30"}
          w={"165px"}
          borderRadius={"100rem"}
          cursor={"pointer"}
          _hover={{ bg: "#272727" }}
          onClick={() => {
            setOverlayTwo(<OverlayTwo />);
            onOpen();
          }}
        >
          {!loading && !error && (
            <Flex alignItems={"center"} gap={".4rem"}>
              {userDetails?.profileImage && (
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  objectFit={"cover"}
                  src={`https://${userDetails.profileImage}`}
                  alt={`${userDetails.username}'s image`}
                />
              )}
              <Text fontSize={"1.2rem"} fontWeight={"500"}>
                {userDetails?.username}{" "}
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlayTwo}
        <EditProfile onClose={onClose} />
      </Modal>
    </Box>
  );
};

export default ProfileDetails;
