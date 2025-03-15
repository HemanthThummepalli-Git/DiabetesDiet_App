import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const FoodTable = ({ data }) => {
  return (
    <Box p={2}>
      <TableContainer>
        <Table variant="simple" size="md">
          {/* Header */}
          <Thead>
            <Tr bg="blue.600">
              {["Eating Time", "Calories", "Carbs", "Fat", "Protein", "Sodium", "Sugar"].map((heading, index) => (
                <Th 
                  key={index} 
                  color="white" 
                  fontSize="16px" 
                  textAlign="center" 
                  py={3}
                  fontWeight="bold"
                >
                  {heading}
                </Th>
              ))}
            </Tr>
          </Thead>

          {/* Body */}
          <Tbody>
            {data?.length > 0 ? (
              data.map((el, i) => (
                <Tr
                  key={el._id}
                  bg={i % 2 === 0 ? "gray.50" : "white"} // Alternating row colors
                  _hover={{
                    bg: "blue.50",
                    transition: "0.2s ease-in-out",
                  }}
                >
                  <Td textAlign="center" fontWeight="bold" color="gray.700">
                    {el.time || "N/A"}
                  </Td>
                  <Td textAlign="center">{el.foodID?.Calories || "N/A"} kcal</Td>
                  <Td textAlign="center">{el.foodID?.TotalCarbs || "N/A"} </Td>
                  <Td textAlign="center">{el.foodID?.TotalFat || "N/A"} </Td>
                  <Td textAlign="center">
                    {el.foodID?.Protein || "N/A"} 
                  </Td>
                  <Td textAlign="center">{el.foodID?.Sodium || "N/A"} </Td>
                  <Td textAlign="center" fontWeight="bold" color="red.500">
                    {el.foodID?.Sugar || "N/A"} 
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={7} textAlign="center" fontWeight="bold" color="gray.500" py={5}>
                  No food entries found
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FoodTable;
