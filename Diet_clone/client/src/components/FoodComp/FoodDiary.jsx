import { Box, Button, Grid, Heading, Text, Input, Flex, Divider, Progress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchAllFoodDiary } from "../../api";
import FoodTable from "./FoodTable";
import HeadDate from "./HeadDate";

const FoodDiary = () => {
  const [data, setData] = useState([]);
  const [waterCups, setWaterCups] = useState(0); 
  const goal = 8;

  const searchData = async () => {
    const userID = localStorage.getItem("fitUserID");
    const param = { userID: userID };
    const res = await searchAllFoodDiary(param);
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    searchData();
  }, []);

  // Function to add water cups
  const addWater = (cups) => {
    setWaterCups((prev) => Math.min(goal, prev + cups)); // Prevent exceeding goal
  };

  return (
    <Box m="auto" w={{ lg: "80%", md: "90%", sm: "100%" }} p={6} borderRadius="lg" bg="gray.50">
      
      {/* Header Section */}
      <Box bg="white" p={4} boxShadow="md" borderRadius="md">
        <HeadDate />
      </Box>

      {/* Meal Sections */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={6}>
        {["Breakfast", "Lunch", "Dinner", "Snacks"].map((meal, index) => (
          <Box
            key={index}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: "lg" }}
            transition="0.3s"
          >
            <Flex justify="space-between" align="center">
              <Heading size="md">{meal}</Heading>
              <Link to="/food/addfood">
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() => localStorage.setItem("time", meal.toLowerCase())}
                >
                  + Add Food
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </Grid>

      {/* Food Table */}
      <Box mt={8} bg="white" p={4} boxShadow="md" borderRadius="md">
        <FoodTable data={data} />
      </Box>

      {/* Completion Button */}
      <Box textAlign="center" mt={6}>
        <Text fontSize="sm" color="gray.600">
          When you're finished logging all foods and exercise for this day, click below:
        </Text>
        <Button colorScheme="green" size="lg" mt={3}>
          Complete This Entry
        </Button>
      </Box>

      {/* Additional Sections */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={8}>

        {/* Water Consumption Section */}
        <Box p={5} bg="white" borderRadius="md" boxShadow="md">
          <Flex justify="space-between" align="center" mb={3}>
            <Heading size="md">💧 Water Tracker</Heading>
            <Text fontSize="sm" color="gray.500">Goal: {goal} Cups</Text>
          </Flex>

          {/* Live Progress Bar */}
          <Progress value={(waterCups / goal) * 100} size="sm" colorScheme="blue" borderRadius="full" />

          {/* Visual Water Glasses */}
          <Flex justify="center" mt={4} gap={2}>
            {[...Array(goal)].map((_, index) => (
              <Box
                key={index}
                w="30px"
                h="50px"
                borderRadius="5px"
                bg={index < waterCups ? "blue.400" : "gray.200"}
                border="2px solid blue.300"
                transition="0.3s"
              />
            ))}
          </Flex>

          <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">
            {waterCups} Cups Drunk
          </Text>

          <Divider my={4} />

          {/* Quick Add Section */}
          <Text fontWeight="bold">Quick Add:</Text>
          <Flex mt={2} gap={2}>
            {["+1 cup", "+2 cups", "+4 cups"].map((cup, i) => {
              const amount = parseInt(cup.replace("+", "").replace(" cups", ""));
              return (
                <Button key={i} size="sm" variant="outline" colorScheme="blue" _hover={{ bg: "blue.50" }} onClick={() => addWater(amount)}>
                  {cup}
                </Button>
              );
            })}
          </Flex>

          {/* Custom Input Section */}
          <Text fontWeight="bold" mt={4}>Custom Add:</Text>
          <Flex mt={2} gap={2}>
            <Input id="customWater" placeholder="Enter cups" size="sm" borderColor="blue.300" type="number" min="1" max="8" />
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => {
                const inputValue = document.getElementById("customWater").value;
                if (inputValue) addWater(parseInt(inputValue));
              }}
            >
              Add
            </Button>
          </Flex>
        </Box>

        {/* Notes Section */}
        <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
          <Heading size="md">Today's Food Notes</Heading>
          <Input placeholder="Write notes here..." mt={3} />
        </Box>
      </Grid>
    </Box>
  );
};

export default FoodDiary;
