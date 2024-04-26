import {
  SimpleGrid,
  CardHeader,
  Heading,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

const CardComponent = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"2px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Heading size="md">NO of Proposals</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"2px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Heading size="md">Number of Votes</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"2px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Heading size="md">Total voted</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardComponent;
