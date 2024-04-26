import {
  SimpleGrid,
  CardHeader,
  Heading,
  Card,
  CardBody,
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
          <Heading size="md">Total Proposals Created</Heading>
        </CardHeader>
        <CardBody>
          <Heading as="h2" size="xl">
            65
          </Heading>
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
          <Heading size="md">Approved Proposals</Heading>
        </CardHeader>
        <CardBody>
          <Heading as="h2" size="xl">
            65
          </Heading>
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
          <Heading size="md">Rejected Proposals</Heading>
        </CardHeader>
        <CardBody>
          <Heading as="h2" size="xl">
            5
          </Heading>
        </CardBody>
      </Card>{" "}
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"2px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Heading size="md">My Proposals</Heading>
        </CardHeader>
        <CardBody>
          <Heading as="h2" size="xl">
            2
          </Heading>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardComponent;
