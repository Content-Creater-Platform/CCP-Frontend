import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import useGetSubscribedTo from "../../../../hooks/useGetSubscribedTo";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

interface subscriberInfo {
  username: string;
  addr: `0x${string}` | undefined;
}

const SubscribedTo = () => {
  const { address } = useWeb3ModalAccount();
  const {
    data: subscribersInfo = [],
    loading,
    error,
  } = useGetSubscribedTo(address);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Text className="font" fontWeight={"600"} fontSize={"1.4rem"}>
        Subscriptions
      </Text>
      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th>Address</Th>
              <Th>Username</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(subscribersInfo as subscriberInfo[]).map((info, index) => (
              <Tr key={index}>
                <Td>{info.addr}</Td>
                <Td>{info.username}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubscribedTo;
