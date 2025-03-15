import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { addFoodByName, searchByName } from "../../api";

function AddFood() {
  const [data, setData] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [value, setValue] = useState("");
  const time = localStorage.getItem("time");

  const onAllSearch = async () => {
    const res = await searchByName(value);
    setData(res.data);
    setFoodId(res.data._id);
  };

  const addToDairy = async (foodID, time) => {
    const currdate = new Date();
    let date = `${currdate.getDate()}-${currdate.getMonth() + 1}-${currdate.getFullYear()}`;
    const userID = localStorage.getItem("fitUserID");
    const param = { date, time, userID, foodID };
    await addFoodByName(param);
  };

  return (
    <Flex 
      w="60%" 
      m="auto" 
      flexDirection="column" 
      height="550px" 
      p="20px" 
      borderRadius="8px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      backgroundColor="white"
    >
      <Text fontSize="1.7rem" fontWeight="bold" color="#00548f" mb={4} textAlign="center">
        Add Food to Breakfast
      </Text>

      <Box>
        <Text fontSize="16px" mb={2} fontWeight="medium">
          Search our food database by name:
        </Text>
        <Flex gap="1rem">
          <Input
            placeholder="Search for food..."
            w="60%"
            borderRadius="8px"
            border="1px solid #ccc"
            _focus={{ borderColor: "green.500" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={onAllSearch} colorScheme="green" px={6}>
            Search
          </Button>
        </Flex>
      </Box>

      <Box mt={5}>
        <Text fontSize="18px" fontWeight="bold" color="#00548f">
          Matching Foods:
        </Text>

        <Stack direction="row" mt={3} spacing={5} h="250px">
          {/* Food List */}
          <Box
            w="50%"
            border="1px solid #ddd"
            borderRadius="8px"
            overflowY="auto"
            p="10px"
            backgroundColor="#f9f9f9"
          >
            {data.length === 0 ? (
              <Text textAlign="center" color="gray.500">No results found.</Text>
            ) : (
              data.map((el) => (
                <Box
                  key={el._id}
                  p="8px"
                  borderBottom="1px solid #ddd"
                  _hover={{ backgroundColor: "#e6f7ff" }}
                  transition="0.2s"
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="medium" color="blue.600">
                      {el.FoodDescription}
                    </Text>
                    <Button 
                      colorScheme="blue" 
                      size="sm" 
                      onClick={() => addToDairy(el._id, time)}
                    >
                      ADD
                    </Button>
                  </Flex>
                </Box>
              ))
            )}
          </Box>

          {/* Placeholder Section for Future Enhancements */}
          <Flex
            w="50%"
            background="#f6f6f6"
            justifyContent="center"
            alignItems="center"
            borderRadius="8px"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
            <Text color="gray.500">Food details will appear here...</Text>
          </Flex>
        </Stack>
      </Box>

      {/* Add Food Option */}
      <HStack mt={4} fontSize="16px" fontWeight="medium" justifyContent="center">
        <Text color="black">Can't find what you're looking for?</Text>
        <Text color="#00548f" cursor="pointer" _hover={{ color: "orange" }}>
          Add a food to the database
        </Text>
      </HStack>
    </Flex>
  );
}

export default AddFood;
