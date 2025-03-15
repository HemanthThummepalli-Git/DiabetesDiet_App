import {
  Box,
  Button,
  Flex,
  VStack,
  Input,
  Select,
  Text,
  useToast,
  Divider,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getExerciseDairy, postExercise, postExerciseDairy } from "../../api";
import { ExerciseContext } from "../../Context/ExerciseContext";

const initialExerciseData = {
  name: "",
  type: "",
  min: "",
  calories: "",
  sets: "",
  reps: "",
  wtsets: "",
};

const storedExercises = JSON.parse(localStorage.getItem("PersonalExercise")) || [];

function CreateNewMyExercise() {
  const [data, setData] = useState(initialExerciseData);
  const [type, setType] = useState(data.type);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setType(data.type);
  }, [data.type]);

  const { setExercisedata } = useContext(ExerciseContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const postExerciseHandler = async () => {
    let res = await postExercise(data);
    let obj = {
      date: new Date().toISOString().slice(0, 10),
      id: res.data.message._id,
      newobj: data,
    };

    let exd = await postExerciseDairy(obj);
    let response = await getExerciseDairy(exd.data.message.date);
    setExercisedata(response.data.message[0]);

    toast({
      title: "Exercise Added!",
      description: "Your exercise has been successfully added to MyFitnessPal.",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });

    navigate("/exercise");
  };

  return (
    <Flex flexDir="column" width="50%" m="3rem auto" p="2rem" borderRadius="10px" bg="white" boxShadow="lg">
      {/* Header */}
      <Text fontSize="1.5rem" fontWeight="bold" color="#00548f" mb="1rem">
        Add a New Exercise
      </Text>
      <Divider mb="1rem" />

      {/* Form Inputs */}
      <VStack spacing="1rem" align="start">
        <Box w="100%">
          <Text fontWeight="medium">Exercise Description:</Text>
          <Input
            placeholder="e.g. abdominal abs"
            onChange={handleChange}
            name="name"
            variant="filled"
            _focus={{ bg: "white", borderColor: "blue.400" }}
          />
        </Box>

        <Box w="100%">
          <Text fontWeight="medium">Exercise Type:</Text>
          <Select
            onChange={handleChange}
            name="type"
            placeholder="Select type"
            variant="filled"
            _focus={{ bg: "white", borderColor: "blue.400" }}
          >
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="Strength">Strength Training</option>
          </Select>
        </Box>

        {type === "Cardiovascular" || type === "" ? (
          <>
            <Box w="100%">
              <Text fontWeight="medium">Duration (minutes):</Text>
              <Input
                onChange={handleChange}
                name="min"
                type="number"
                placeholder="Enter minutes"
                variant="filled"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Box>

            <Box w="100%">
              <Text fontWeight="medium">Calories Burned:</Text>
              <Input
                onChange={handleChange}
                name="calories"
                type="number"
                placeholder="Enter calories"
                variant="filled"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Box>
          </>
        ) : (
          <>
            <Box w="100%">
              <Text fontWeight="medium">Sets:</Text>
              <Input
                onChange={handleChange}
                name="sets"
                type="number"
                placeholder="Enter sets"
                variant="filled"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Box>

            <Box w="100%">
              <Text fontWeight="medium">Reps per Set:</Text>
              <Input
                onChange={handleChange}
                name="reps"
                type="number"
                placeholder="Enter reps"
                variant="filled"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Box>

            <Box w="100%">
              <Text fontWeight="medium">Weight per Set (kg):</Text>
              <Input
                onChange={handleChange}
                name="wtsets"
                type="number"
                placeholder="Enter weight"
                variant="filled"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Box>
          </>
        )}
      </VStack>

      {/* Submit Button */}
      <Button
        colorScheme="blue"
        mt="1.5rem"
        w="100%"
        h="45px"
        fontSize="1rem"
        onClick={postExerciseHandler}
        transition="0.3s"
        _hover={{ bg: "blue.600" }}
      >
        Add Exercise
      </Button>

      {/* Info Box */}
      <Box mt="2rem" bg="gray.100" p="1rem" borderRadius="8px">
        <Text fontWeight="bold" color="blue.600">💡 Creating a New Exercise</Text>
        <Text fontSize="0.9rem" mt="0.5rem">
          If you can't find an exercise in our database, you can add it manually.
          For cardio exercises, if you're unsure about calories burned, try selecting a similar
          exercise from our database for a rough estimate.
        </Text>
      </Box>
    </Flex>
  );
}

export default CreateNewMyExercise;
