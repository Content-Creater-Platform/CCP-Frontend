import {
  Box,
  Flex,
  GridItem,
  Img,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
// import { FiEye } from "react-icons/fi";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const Content = ({
  item,
  id,
  handleFullContent,
  handleLike,
  handleDisLike,
  handleDelete,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp, setTimestamp] = useState(item.dateCreated); // Example timestamp
  const [timeAgo, setTimeAgo] = useState<SetStateAction<any>>(null);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const elapsedTime = currentTime - Number(timestamp); // Elapsed time in seconds

    const getTimeAgo = (elapsedTime: any) => {
      // Define time intervals in seconds
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      // Determine the appropriate time interval
      if (elapsedTime < minute) {
        return "Just now";
      } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    };

    setTimeAgo(getTimeAgo(elapsedTime));
    setTimestamp((prevTime: any) => prevTime);
  }, [timestamp]);

  const handleDisLiked = () => {
    setDisLiked((prevDisLiked) => !prevDisLiked);
    setLiked(false);
  };

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const elapsedTime = currentTime - Number(timestamp); // Elapsed time in seconds

    const getTimeAgo = (elapsedTime: any) => {
      // Define time intervals in seconds
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      // Determine the appropriate time interval
      if (elapsedTime < minute) {
        return "Just now";
      } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    };

    setTimeAgo(getTimeAgo(elapsedTime));
    setTimestamp((prevTime: any) => prevTime);
  }, [timestamp]);

  return (
    <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
      <Flex align={"center"} justify={"space-between"}>
        <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
          <Img
            src={`https://${item.creatorImage}`} // Assuming creatorProfile is the URL to the creator's profile image
            w={"50px"}
            h={"50px"}
            objectFit={"cover"}
            borderRadius={"100%"}
            alt="Creator Profile"
          />
          <Flex align={"end"} gap={".4rem"}>
            <Box>
              <Text>{item.creatorProfile}</Text>
            </Box>
            <Text color={"#15AB99"}>. {timeAgo}</Text>
          </Flex>
        </Flex>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                minWidth={"0"}
                bg={"none"}
                aria-label={"More"}
                px={"0"}
                border={"none"}
                _hover={{ background: "none", border: "none" }}
                _focus={{ outline: "none" }}
                _active={{ background: "none" }}
                isActive={isOpen}
                as={Button}
              >
                <Icon
                  as={HiDotsHorizontal}
                  color={"#fff"}
                  fontSize={"1.3rem"}
                />
              </MenuButton>
              <MenuList bg={"#1C1C1E"} border={"none"}>
                <MenuItem
                  bg={"#1C1C1E"}
                  _hover={{ background: "none" }}
                  _focus={{ background: "none", outline: "none" }}
                  onClick={() => handleDelete(Number(item.id))}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
      <Box
        mb={"1rem"}
        onClick={() => {
          onOpen();
          handleFullContent(item);
        }}
      >
        <Text mb={".5rem"}>{item.title}</Text>
        {(item.contentType === "image" && (
          <Img
            mb={"1rem"}
            src={`https://${item.ipfsHash}`} // Assuming ipfsHash is the URL to the content image
            alt="Content Image"
            h={"200px"}
            w={"100%"}
            objectFit={"cover"}
            cursor={"pointer"}
            borderRadius={".5rem"}
          />
        )) ||
          (item.contentType === "video" && (
            <video src={`https://${item.ipfsHash}`} width="100%" height="100" />
          )) ||
          (item.contentType === "audio" && (
            <audio src={`https://${item.ipfsHash}`} controls />
          ))}
      </Box>
      <Flex justify={"space-between"}>
        <Box>
          <Flex gap={"1.5rem"} align={"center"}>
            <Flex
              gap={".2rem"}
              onClick={() => {
                handleLike(Number(item.id));
              }}
              cursor={"pointer"}
              align={"center"}
            >
              <Icon as={FaThumbsUp} fontSize={"1rem"} />
              <Text>{Number(item.likes)}</Text>
            </Flex>
            <Flex
              gap={".2rem"}
              onClick={() => {
                handleDisLike(Number(item.id));
              }}
              cursor={"pointer"}
              align={"center"}
            >
              <Icon as={FaThumbsDown} fontSize={"1rem"} />
              <Text>{Number(item.dislikes)}</Text>
            </Flex>
            {/* <Flex gap={".2rem"} align={"center"}>
              <Icon as={FiEye} fontSize={"1rem"} />
              <Text>{Number(item.views)}</Text>
            </Flex> */}
          </Flex>
        </Box>
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
          {item.contentType}
        </Box>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent mb={6} mt={20} bg={"#262628"} className="font">
          <ModalBody>
            <Text mb={".5rem"}>{id?.title}</Text>
            {(item.contentType === "image" && (
              <Img
                mb={"1rem"}
                src={`https://${id?.ipfsHash}`} // Assuming ipfsHash is the URL to the content image
                alt="Content Image"
                objectFit={"cover"}
                cursor={"pointer"}
                borderRadius={".5rem"}
              />
            )) ||
              (item.contentType === "video" && (
                <video width="750" height="500" controls>
                  <source src={`https://${id?.ipfsHash}`} />
                </video>
              )) ||
              (item.contentType === "audio" && (
                <audio controls>
                  <source src={`https://${id?.ipfsHash}`} />
                  Your browser does not support the audio element.
                </audio>
              ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};

export default Content;
