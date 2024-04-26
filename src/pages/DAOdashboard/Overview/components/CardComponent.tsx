import { SimpleGrid, CardHeader, Card, CardBody, Text } from "@chakra-ui/react";
import "../../../../App.css";

const CardComponent = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"1px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Text className="font" fontWeight={"600"} fontSize={"1.3rem"}>
            Total Proposals Created
          </Text>
        </CardHeader>
        <CardBody>
          <Text className="font" fontWeight={"600"} fontSize={"1.5rem"}>
            65
          </Text>
        </CardBody>
      </Card>
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"1px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Text className="font" fontWeight={"600"} fontSize={"1.3rem"}>
            Approved Proposals
          </Text>
        </CardHeader>
        <CardBody>
          <Text className="font" fontWeight={"600"} fontSize={"1.5rem"}>
            65
          </Text>
        </CardBody>
      </Card>
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"1px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Text className="font" fontWeight={"600"} fontSize={"1.3rem"}>
            Rejected Proposals
          </Text>
        </CardHeader>
        <CardBody>
          <Text className="font" fontWeight={"600"} fontSize={"1.5rem"}>
            5
          </Text>
        </CardBody>
      </Card>{" "}
      <Card
        bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
        color="#fff"
        border={"1px"}
        boxShadow="lg"
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
      >
        <CardHeader>
          <Text className="font" fontWeight={"600"} fontSize={"1.3rem"}>
            My Proposals
          </Text>
        </CardHeader>
        <CardBody>
          <Text className="font" fontWeight={"600"} fontSize={"1.5rem"}>
            2
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardComponent;
