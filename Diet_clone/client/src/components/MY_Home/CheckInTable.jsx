import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Box,
} from "@chakra-ui/react";

const CheckInTable = () => {
  return (
    <Box mt={6} boxShadow="md" borderRadius="lg" overflow="hidden">
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          {/* Header */}
          <Thead bgGradient="linear(to-r, blue.700, blue.500)">
            <Tr>
              <Th color="white" fontSize="md">📏 Other Measurements</Th>
              <Th color="white" fontSize="md">📅 Last Entry</Th>
              <Th color="white" fontSize="md" isNumeric>✍️ Today's Entry</Th>
            </Tr>
          </Thead>

          {/* Table Body */}
          <Tbody>
            {["Neck", "Waist", "Hips"].map((measurement, index) => (
              <Tr key={index}>
                <Td fontWeight="medium">{measurement}</Td>
                <Td color="gray.500" fontStyle="italic">None</Td>
                <Td isNumeric>
                  <Input
                    type="number"
                    size="sm"
                    w="70px"
                    borderColor="gray.400"
                    bg="white"
                    _hover={{ borderColor: "blue.400" }}
                    _focus={{ borderColor: "blue.600", boxShadow: "md" }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CheckInTable;
