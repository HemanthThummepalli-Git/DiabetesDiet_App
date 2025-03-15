import React from "react";
import { Box, Flex, Text, Table, Tr, Th, TableContainer, Thead } from "@chakra-ui/react";

function DwTotal({ summin, sumcal }) {
  return (
    <Box
      m="1.5rem 0"
      p="1.5rem"
      borderRadius="10px"
      boxShadow="md"
      bg="white"
      transition="0.3s"
      _hover={{ boxShadow: "lg" }}
    >
      {[
        { title: "Daily", bg: "#0074B7", textColor: "white" },
        { title: "Weekly", bg: "gray.200", textColor: "black" },
      ].map((item, index) => (
        <Flex justifyContent="center" key={index} mb={index === 0 ? "1rem" : "0"}>
          <TableContainer w={{ base: "100%", md: "70%" }}>
            <Table variant="simple">
              <Thead>
                <Tr bg={item.bg}>
                  <Th textAlign="end" color={item.textColor} fontWeight="bold" p="10px">
                    {item.title} Total / <Text as="span" color="#FFD700">Goal</Text>
                  </Th>
                  <Th textAlign="center" bg="gray.50" fontWeight="bold" p="10px">
                    {summin} / <Text as="span" color="#0074B7">60</Text>
                  </Th>
                  <Th textAlign="center" bg="gray.50" fontWeight="bold" p="10px">
                    {sumcal} / <Text as="span" color="#0074B7">500</Text>
                  </Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        </Flex>
      ))}
    </Box>
  );
}

export default DwTotal;
