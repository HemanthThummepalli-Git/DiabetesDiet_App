import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function HeadDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  };

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <Flex justifyContent={"center"} alignItems="center" p={"4"} gap="3" flexWrap="wrap">
      <Box>
        <Text
          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
          color={"#0B5680"}
          fontWeight="bold"
          textAlign="center"
        >
          Your Food Diary For:
        </Text>
      </Box>
      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          gap="8px"
          p="2"
        >
          {/* Previous Date Button */}
          <Box
            p="2"
            textAlign="center"
            color="white"
            bgGradient="linear(to-r, #00548F, #0074B7)"
            borderRadius="8px"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ bgGradient: "linear(to-r, #004077, #00619E)" }}
            onClick={handlePreviousDate}
          >
            <AiFillCaretLeft fontWeight="bold" fontSize="1.5rem" />
          </Box>

          {/* Date Display */}
          <Box
            p="2"
            w="220px"
            textAlign="center"
            color="white"
            bgGradient="linear(to-r, #0074B7, #0091D1)"
            borderRadius="8px"
            fontWeight="bold"
            boxShadow="md"
          >
            {selectedDate.toDateString()}
          </Box>

          {/* Next Date Button */}
          <Box
            p="2"
            textAlign="center"
            color="white"
            bgGradient="linear(to-r, #00548F, #0074B7)"
            borderRadius="8px"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ bgGradient: "linear(to-r, #004077, #00619E)" }}
            onClick={handleNextDate}
          >
            <AiFillCaretRight fontWeight="bold" fontSize="1.5rem" />
          </Box>

          {/* Date Picker */}
          <Box>
            <Input
              type="date"
              w="auto"
              p="2"
              fontSize="14px"
              color="#444"
              border="1px solid #ddd"
              borderRadius="5px"
              _hover={{ borderColor: "#0091D1" }}
              _focus={{ borderColor: "#0074B7", boxShadow: "0 0 5px rgba(0, 116, 183, 0.5)" }}
              onChange={handleDateChange}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default HeadDate;
