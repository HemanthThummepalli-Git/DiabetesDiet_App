import React from "react";
import { Box, Center, Flex, Text, Icon, Divider } from "@chakra-ui/react";
import { AiFillLock } from "react-icons/ai";

const Daily_Nutrition_Goals = [
  { name: "Calories", value: "2710 kcal" },
  { name: "Carbohydrates", value: "50%" },
  { name: "Fat", value: "30%" },
  { name: "Protein", value: "20%" },
];

const Calories_Meal = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const fitness = [
  { name: "Calories Burned / Week", value: "0 kcal" },
  { name: "Workouts / Week", value: "0 workouts" },
  { name: "Minutes / Workout", value: "0 min" },
];

const Goals = () => {
  return (
    <Center mt={10}>
      <Box w={{ base: "90%", md: "60%", lg: "50%" }} p={6} bg="white" borderRadius="lg" boxShadow="xl">
        {/* Header */}
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="blue.600" mb={4}>
          Your Fitness Goals
        </Text>

        {/* Section: Daily Nutrition Goals */}
        <Box bg="gray.100" p={4} borderRadius="md">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="lg" fontWeight="bold">🍎 Daily Nutrition Goals</Text>
            <Text fontSize="md" fontWeight="bold" color="blue.500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
              EDIT
            </Text>
          </Flex>
          {Daily_Nutrition_Goals.map((el, index) => (
            <Box key={index} bg="white" p={3} borderRadius="md" boxShadow="sm" mb={2}>
              <Flex justify="space-between">
                <Text fontSize="md">{el.name}</Text>
                <Text fontWeight="bold">{el.value}</Text>
              </Flex>
            </Box>
          ))}
        </Box>

        <Divider my={5} />

        {/* Section: Calories by Meal */}
        <Box bg="gray.100" p={4} borderRadius="md">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="lg" fontWeight="bold">🍽️ Calories by Meal</Text>
            <Text fontSize="md" fontWeight="bold" color="blue.500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
              EDIT
            </Text>
          </Flex>
          {Calories_Meal.map((meal, index) => (
            <Box key={index} bg="white" p={3} borderRadius="md" boxShadow="sm" mb={2} display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="md">{meal}</Text>
              <Icon as={AiFillLock} color="gray.500" />
            </Box>
          ))}
        </Box>

        <Divider my={5} />

        {/* Section: Fitness Goals */}
        <Box bg="gray.100" p={4} borderRadius="md">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="lg" fontWeight="bold">💪 Fitness Goals</Text>
            <Text fontSize="md" fontWeight="bold" color="blue.500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
              EDIT
            </Text>
          </Flex>
          {fitness.map((el, index) => (
            <Box key={index} bg="white" p={3} borderRadius="md" boxShadow="sm" mb={2}>
              <Flex justify="space-between">
                <Text fontSize="md">{el.name}</Text>
                <Text fontWeight="bold">{el.value}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </Center>
  );
};

export default Goals;
