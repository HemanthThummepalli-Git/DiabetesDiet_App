import { Box, Button, Center, Flex, Input, Text, Divider } from "@chakra-ui/react";
import React from "react";
import CheckInTable from "./CheckInTable";

const CheckIn = () => {
  return (
    <Center mt={10}>
      <Box
        w={{ base: "90%", md: "50%" }}
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
      >
        {/* Header */}
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="blue.600">
          ✅ Check-In
        </Text>
        <Divider my={4} />

        {/* Weight Input Section */}
        <Flex alignItems="center" justify="center" gap={3} mt={3}>
          <Text fontSize="lg" fontWeight="medium">Enter today's weight:</Text>
          <Input
            type="number"
            size="md"
            w="70px"
            textAlign="center"
            borderColor="blue.400"
            _focus={{ borderColor: "blue.500", boxShadow: "md" }}
          />
          <Text fontSize="lg" fontWeight="medium">kg</Text>
        </Flex>

        {/* Last Recorded Weight */}
        <Text fontSize="sm" color="gray.500" textAlign="center" mt={2}>
          📌 Last recorded weight: <b>69 kg</b> on <b>11/10/2022</b>
        </Text>

        {/* Check-in Table */}
        <CheckInTable />

        {/* Save Changes Button */}
        <Center mt={6}>
          <Button
            bgGradient="linear(to-r, green.400, green.500)"
            color="white"
            fontWeight="bold"
            _hover={{ bgGradient: "linear(to-r, green.500, green.600)", boxShadow: "md" }}
            px={6}
            py={2}
          >
            Save Changes
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default CheckIn;
