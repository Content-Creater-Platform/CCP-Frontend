import {
  Box,
  Input,
  Text,
  Textarea,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaImage, FaMusic } from "react-icons/fa";
import { RiFileVideoFill } from "react-icons/ri";
import useCreateContent from "../../../../hooks/useCreateContent";
import { ChangeEvent, useState } from "react";
import useGetUserDetails from "../../../../hooks/useGetUserDetails";

const CreateInput = () => {
  const [title, setTitle] = useState<string>("");
  const [ipfsHash, setIpfsHash] = useState<string>("");
  const [contentType, setContentType] = useState("");
  const { data: userDetails } = useGetUserDetails();

  const handleCaption = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      await handleSubmission(selectedFile);

      const fileExtension = selectedFile.name.split(".").pop();
      setContentType(fileExtension || "");
    }
  };

  const handleSubmission = async (fileToUpload: string | Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();

      setIpfsHash(resData.IpfsHash);
      console.log(resData.IpfsHash);
    } catch (e) {
      console.log(e);
      alert("Trouble uploading file");
    }
  };

  const handleCreateContent = useCreateContent(
    title,
    `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${ipfsHash}`,
    contentType,
    userDetails?.username || "" // Use optional chaining to access username
  );

  return (
    <Box mb={"3rem"}>
      <Text fontSize={"2rem"} fontWeight={"600"} mb={"1rem"}>
        What will you create today, {userDetails?.username || "Username"}?
      </Text>
      <Box
        border={"1px solid #535354"}
        py={"1rem"}
        px={".8rem"}
        borderRadius={".8rem"}
        transition={"all 1s"}
      >
        <Textarea
          placeholder="What's on your mind?"
          value={title}
          resize={"none"}
          border={"none"}
          _focus={{ boxShadow: "none" }}
          _placeholder={{ color: "#B7B7B6", fontSize: ".9rem" }}
          p={"0"}
          mb={"0.5rem"}
          onChange={handleCaption}
        />
        <Flex justify={"space-between"} align={"end"}>
          <Flex gap={"1rem"}>
            <Flex>
              <Input
                onChange={changeHandler}
                accept="image/jpg, image/jpeg, image/png, image/gif"
                type="file"
                border={"none"}
                id="image"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="image">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={FaImage} fontSize={".7rem"} />
                    <Text fontSize={".8rem"}>Photo</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
            <Flex>
              <Input
                accept="video/mp4, video/avi, video/mov"
                type="file"
                border={"none"}
                id="video"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="video">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={RiFileVideoFill} fontSize={".8rem"} />
                    <Text fontSize={".8rem"}>Video</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
            <Flex>
              <Input
                accept="audio/mp3, audio/wav, audio/ogg"
                type="file"
                border={"none"}
                id="audio"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="audio">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={FaMusic} fontSize={".7rem"} />
                    <Text fontSize={".8rem"}>Audio</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
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
            onClick={() => {
              handleCreateContent();
            }}
          >
            <Text>Create</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateInput;
