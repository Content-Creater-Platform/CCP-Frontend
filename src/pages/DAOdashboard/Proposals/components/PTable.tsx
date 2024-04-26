import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const PTable = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th color="#fff">Proposal</Th>
            <Th color="#fff">Status</Th>
            <Th color="#fff">Time Left</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color="#000">Market Place</Td>
            <Td color="#000">Ongoing</Td>
            <Td color="#000">25.4</Td>
          </Tr>
          <Tr>
            <Td color="#fff">Ongoing</Td>
            <Td color="#fff">Successful</Td>
            <Td color="#fff">30.48</Td>
          </Tr>
          <Tr>
            <Td color="#000">yards</Td>
            <Td color="#000">Cancelled</Td>
            <Td color="#000">0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PTable;
