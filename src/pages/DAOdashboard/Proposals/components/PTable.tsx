import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import useContentDAO from "../../../../hooks/useDAO";

const PTable: React.FC = () => {
  const { createProposal, fetchProposals } = useContentDAO();
  const [proposals, setProposals] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
  });

  useEffect(() => {
    fetchProposals().then(setProposals);
  }, [fetchProposals]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseDialog = (): void => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (): void => {
    const durationNumber: number = parseInt(formData.duration);
    createProposal(formData.name, formData.description, durationNumber);
    setIsDialogOpen(false);
    setFormData({ name: "", description: "", duration: "" });
  };

  return (
    <>
      <Button
        colorScheme="teal"
        size="md"
        mb="20px"
        onClick={() => setIsDialogOpen(true)}
      >
        Create Proposal
      </Button>

      <AlertDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        leastDestructiveRef={cancelRef}
        size="lg"
      >
        <AlertDialogOverlay />
        <AlertDialogContent bg="gray.800" color="white">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Create Proposal
          </AlertDialogHeader>
          <AlertDialogBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                bg="gray.700"
                color="white"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                bg="gray.700"
                color="white"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                bg="gray.700"
                color="white"
              />
            </FormControl>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              ml={3}
              bg="blue.600"
            >
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <SimpleGrid
        spacing={9}
        m="20px"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md">Total Proposals Created</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Approved Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Rejected Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">My Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <TableContainer>
        <Table variant="striped" colorScheme="">
          <Thead>
            <Tr>
              <Th>Proposal</Th>
              <Th>Status</Th>
              <Th isNumeric>Time Left</Th>
              <Th isNumeric>Total Votes</Th>
              <Th isNumeric>Votes For</Th>
              <Th isNumeric>Votes Against</Th>
              <Th isNumeric>Vote</Th>
            </Tr>
          </Thead>
          <Tbody>
            {proposals.map((proposal) => (
              <Tr key={proposal.id}>
                <Td>{proposal.name}</Td>
                <Td>{proposal.status}</Td>
                <Td isNumeric>{proposal.timeLeft}</Td>
                <Td isNumeric>{proposal.totalVotes}</Td>
                <Td isNumeric>{proposal.votesFor}</Td>
                <Td isNumeric>{proposal.votesAgainst}</Td>
                <Td isNumeric>
                  <HStack spacing={2}>
                    <LuThumbsUp
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        // Handle vote for
                      }}
                    />
                    <LuThumbsDown
                      onClick={() => {
                        // Handle vote against
                      }}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PTable;
