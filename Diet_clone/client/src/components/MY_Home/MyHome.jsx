import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MyHome = () => {
  return (
    <Center mt={10}>
      <Box
        w={{ lg: "55%", md: "75%", sm: "90%" }}
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="2xl"
      >
        {/* Header Section */}
        <Box
          bgGradient="linear(to-r, blue.600, blue.400)"
          borderRadius="lg"
          p={4}
          boxShadow="md"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="white" fontSize="lg" fontWeight="semibold">
              Daily Summary
            </Text>
            <Text color="yellow.300" fontSize="lg" fontWeight="bold">
              🔥 5-Day Streak
            </Text>
          </Flex>
        </Box>

        {/* Main Section */}
        <Box mt={6}>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Profile Section */}
            <VStack spacing={4}>
              <Box
                w={120}
                h={120}
                bg="gray.100"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                transition="0.3s"
                _hover={{ bg: "gray.200", transform: "scale(1.05)" }}
              >
                <label htmlFor="file-input">
                  <Text fontWeight="bold" color="gray.600">
                    Upload Photo
                  </Text>
                </label>
              </Box>
              <input style={{ display: "none" }} id="file-input" type="file" />

              <Text fontSize="lg" fontWeight="bold">
                🎯 1 KG Gained
              </Text>
            </VStack>

            {/* Calories & Actions Section */}
            <Box flex="1" ml={{ md: 6 }} textAlign="center">
              <Text fontSize="lg" fontWeight="medium">
                Calories Remaining
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                2710 kcal
              </Text>

              <Flex gap={4} mt={4} justifyContent="center">
                <Button
                  bg="white"
                  border="2px solid"
                  borderColor="gray.400"
                  _hover={{ bg: "gray.100", transform: "scale(1.05)" }}
                >
                  <Link to="/exercise">🏋️ Add Exercise</Link>
                </Button>
                <Button
                  bg="white"
                  border="2px solid"
                  borderColor="gray.400"
                  _hover={{ bg: "gray.100", transform: "scale(1.05)" }}
                >
                  <Link to="/food/dairy">🍽️ Add Food</Link>
                </Button>
              </Flex>
            </Box>
          </Flex>

          {/* Goal Breakdown Section */}
          <Box
            mt={6}
            p={4}
            borderRadius="lg"
            bg="gray.50"
            boxShadow="md"
            textAlign="center"
          >
            <Flex justifyContent="space-around" alignItems="center">
              <VStack>
                <Text fontSize="xl" fontWeight="bold">2710</Text>
                <Text fontSize="sm" color="gray.600">Goal</Text>
              </VStack>
              <VStack>
                <Text fontSize="xl" fontWeight="bold">0</Text>
                <Text fontSize="sm" color="gray.600">Food</Text>
              </VStack>
              <Text fontSize="2xl" mb={7} fontWeight="bold">−</Text>
              <VStack>
                <Text fontSize="xl" fontWeight="bold">0</Text>
                <Text fontSize="sm" color="gray.600">Exercise</Text>
              </VStack>
              <Text fontSize="2xl" mb={7} fontWeight="bold">=</Text>
              <VStack>
                <Text fontSize="xl" fontWeight="bold">0</Text>
                <Text fontSize="sm" color="gray.600">Net</Text>
              </VStack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default MyHome;
