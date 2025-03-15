import React, { useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../Context/ExerciseContext";
import { DeleteExercise, getExerciseDairy } from "../../api";

function CardioVasular({ currdate, setcurrdate }) {
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);

  async function handleGetExercise() {
    let response = await getExerciseDairy(currdate);
    setExercisedata(response.data.message[0]);
  }

  async function handleDelete(id, date) {
    await DeleteExercise(id, date);
    handleGetExercise();
  }

  useEffect(() => {
    handleGetExercise();
  }, []);

  return (
    <Box p={4} borderRadius="md" boxShadow="md" bg="white">
      <TableContainer borderRadius="md" overflow="hidden">
        <Table variant="simple">
          {/* Table Caption */}
          <TableCaption textAlign="start" borderBottom="1px solid lightgrey">
            <Flex gap="2">
              <Link to="/exercise/myexercise">
                <Text
                  fontSize="15px"
                  fontWeight="bold"
                  color="#0072BF"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  Add Task
                </Text>
              </Link>
              <Text fontSize="13px" color="#0072BF">|</Text>
              <Text
                fontSize="15px"
                fontWeight="bold"
                color="#0072BF"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Quick Tools
              </Text>
            </Flex>
          </TableCaption>

          {/* Table Header */}
          <Thead>
            <Tr bgGradient="linear(to-r, #00548F, #0074B7)">
              <Th
                w="60%"
                fontSize="18px"
                fontWeight="bold"
                color="white"
                textTransform="capitalize"
              >
                Cardiovascular
              </Th>
              <Th color="white" textAlign="center" borderRight="2px solid white">
                Minutes
              </Th>
              <Th color="white" textAlign="center" isNumeric>
                Calories Burned
              </Th>
              <Th></Th>
            </Tr>
          </Thead>

          {/* Table Body */}
          <Tbody>
            {Exercisedata?.exercise?.map((e) => (
              <Tr
                key={e._id}
                borderBottom="1px solid #e6e6e6"
                backgroundColor="gray.100"
                _hover={{ bg: "gray.200", transition: "0.2s" }}
              >
                <Td borderRight="2px solid white">{e.name}</Td>
                <Td textAlign="center" borderRight="2px solid white">
                  {e.min}
                </Td>
                <Td textAlign="center" borderRight="2px solid white">
                  {e.calories}
                </Td>
                <Td textAlign="center">
                  <Text
                    color="red.500"
                    fontSize="1.5rem"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)", transition: "0.2s" }}
                    onClick={() => handleDelete(e._id, Exercisedata.date)}
                  >
                    <AiFillStop />
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CardioVasular;
