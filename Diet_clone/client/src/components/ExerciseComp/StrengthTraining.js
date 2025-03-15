import React from "react";
import {
  Box,
  Flex,
  Text,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { AiFillStop } from "react-icons/ai";

function StrengthTraining() {
  return (
    <Box p={4} borderRadius="md" boxShadow="md" bg="white">
      <TableContainer borderRadius="md" overflow="hidden">
        <Table variant="simple">
          {/* Table Caption with Quick Tools */}
          <TableCaption textAlign="start" borderBottom="1px solid lightgrey">
            <Flex>
              <Text fontWeight="bold" fontSize="15px" color="#0072BF" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                Add Task
              </Text>
              <Text fontSize="13px" color="#0072BF" mx="0.5rem">|</Text>
              <Text fontSize="15px" fontWeight="bold" color="#0072BF" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                Quick Tools
              </Text>
            </Flex>
          </TableCaption>

          {/* Table Head */}
          <Thead>
            <Tr bgGradient="linear(to-r, #00548F, #0074B7)">
              <Th w="70%" fontSize="18px" fontWeight="bold" color="white" borderRight="2px solid white">
                Strength Training
              </Th>
              <Th color="white" borderRight="2px solid white">Sets</Th>
              <Th color="white" borderRight="2px solid white" isNumeric>Reps/Sets</Th>
              <Th color="white" borderRight="2px solid white" isNumeric>Weight/Sets</Th>
              <Th></Th>
            </Tr>
          </Thead>

          {/* Table Body */}
          <Tbody>
            <Tr
              bg="gray.100"
              _hover={{ bg: "gray.200", transition: "0.2s" }}
            >
              <Td borderRight="2px solid white">Push Ups</Td>
              <Td borderRight="2px solid white" textAlign="center">10</Td>
              <Td borderRight="2px solid white" textAlign="center" isNumeric>25</Td>
              <Td borderRight="2px solid white" textAlign="center" isNumeric>25</Td>
              <Td textAlign="center">
                <Text color="red.500" fontSize="1.5rem" _hover={{ transform: "scale(1.2)", transition: "0.2s" }}>
                  <AiFillStop />
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StrengthTraining;
