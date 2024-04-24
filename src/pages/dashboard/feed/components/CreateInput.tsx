import {
  Box,
  Input,
  Text,
  Textarea,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaImage, FaMusic } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";

const CreateInput = () => {
  const [text, setText] = useState(true);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [audio, setAudio] = useState(false);
  const handleText = () => {
    setText(true);
    setImage(false);
    setVideo(false);
    setAudio(false);
  };
  const handleImage = () => {
    setImage(true);
    setText(false);
    setVideo(false);
    setAudio(false);
  };
  const handleVideo = () => {
    setVideo(true);
    setImage(false);
    setText(false);
    setAudio(false);
  };
  const handleAudio = () => {
    setAudio(true);
    setImage(false);
    setText(false);
    setVideo(false);
  };
  return (
    <Box>
      <Text fontSize={"2rem"} fontWeight={"600"} mb={"1rem"}>
        What will create today, Username?
      </Text>
      <Flex
        w={"500px"}
        justify={"space-between"}
        bg={"#252528"}
        gap={"1rem"}
        p={".5rem"}
        borderRadius={".5rem"}
        mb={"1.5rem"}
      >
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${text && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleText}
        >
          <Text>Text</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${image && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleImage}
        >
          <Text>Image</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${video && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleVideo}
        >
          <Text>Video</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${audio && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleAudio}
        >
          <Text>Audio</Text>
        </Button>
      </Flex>
      {text && (
        <Box
          border={"1px solid #535354"}
          py={"1rem"}
          px={".8rem"}
          borderRadius={".8rem"}
          transition={"all 1s"}
        >
          <Textarea
            placeholder="What is in your mind, Username?"
            resize={"none"}
            border={"none"}
            _focus={{ boxShadow: "none" }}
            _placeholder={{ color: "#B7B7B6", fontSize: ".9rem" }}
            p={"0"}
            mb={"0.5rem"}
          />
          <Button
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            w={"150px"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            <Text>Create</Text>
          </Button>
        </Box>
      )}
      {image && (
        <Box>
          <Input type="file" border={"none"} id="selectFile" hidden />
          <Flex align={"end"} justify={"space-between"} mb={".5rem"}>
            <label htmlFor="selectFile">
              <Flex
                borderRadius={".5rem"}
                align={"center"}
                justify={"center"}
                color={"#B7B7B6"}
                w={"400px"}
                h={"200px"}
                bg={"#323436"}
              >
                <Flex flexDirection={"column"} align={"center"}>
                  <Icon as={FaImage} fontSize={"3rem"} />
                  <Text fontSize={"1rem"}>Upload Photo</Text>
                </Flex>
              </Flex>
            </label>
          </Flex>
          <Button
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            w={"150px"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            <Text>Create</Text>
          </Button>
        </Box>
      )}
      {video && (
        <Box>
          <Input type="file" border={"none"} id="selectFile" hidden />
          <Flex align={"end"} justify={"space-between"} mb={".5rem"}>
            <label htmlFor="selectFile">
              <Flex
                borderRadius={".5rem"}
                align={"center"}
                justify={"center"}
                color={"#B7B7B6"}
                w={"400px"}
                h={"200px"}
                bg={"#323436"}
              >
                <Flex flexDirection={"column"} align={"center"}>
                  <Icon as={FaPhotoVideo} fontSize={"3rem"} />
                  <Text fontSize={"1rem"}>Upload Video</Text>
                </Flex>
              </Flex>
            </label>
          </Flex>
          <Button
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            w={"150px"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            <Text>Create</Text>
          </Button>
        </Box>
      )}
      {audio && (
        <Box>
          <Input type="file" border={"none"} id="selectFile" hidden />
          <Flex align={"end"} justify={"space-between"} mb={".5rem"}>
            <label htmlFor="selectFile">
              <Flex
                borderRadius={".5rem"}
                align={"center"}
                justify={"center"}
                color={"#B7B7B6"}
                w={"400px"}
                h={"200px"}
                bg={"#323436"}
              >
                <Flex flexDirection={"column"} align={"center"}>
                  <Icon as={FaMusic} fontSize={"3rem"} />
                  <Text fontSize={"1rem"}>Upload Audio</Text>
                </Flex>
              </Flex>
            </label>
          </Flex>
          <Button
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            w={"150px"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            <Text>Create</Text>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CreateInput;
