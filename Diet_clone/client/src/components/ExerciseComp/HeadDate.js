import React, { useState } from "react";
import { Box, Flex, Input, Text, IconButton } from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs"; // Calendar Icon

function HeadDate({ setcurrdate }) {
  // State for date selection
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format date
  const formattedDate = selectedDate.toDateString();

  // Function to move to previous date
  const handlePreviousDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      setcurrdate(newDate.toISOString().split("T")[0]);
      return newDate;
    });
  };

  // Function to move to next date
  const handleNextDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      setcurrdate(newDate.toISOString().split("T")[0]);
      return newDate;
    });
  };

  // Handle manual date selection
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setcurrdate(e.target.value);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(to right, #00548F, #0074B7)"
      borderRadius="12px"
      boxShadow="lg"
      p="4"
      color="white"
    >
      {/* Header */}
      <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }} fontWeight="bold">
        Your Exercise Diary For:
      </Text>

      {/* Date Selector */}
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        gap="4"
        mt="2"
      >
        {/* Previous Date Button */}
        <Box
          as="button"
          p="3"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.2)"
          transition="0.3s"
          _hover={{ bg: "rgba(255, 255, 255, 0.4)", transform: "scale(1.1)" }}
          onClick={handlePreviousDate}
        >
          <AiFillCaretLeft fontSize="1.8rem" />
        </Box>

        {/* Display Date */}
        <Box
          p="2"
          minW="180px"
          textAlign="center"
          bg="rgba(255, 255, 255, 0.15)"
          borderRadius="8px"
          fontWeight="bold"
          fontSize="1.2rem"
          letterSpacing="wider"
          boxShadow="md"
        >
          {formattedDate}
        </Box>

        {/* Next Date Button */}
        <Box
          as="button"
          p="3"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.2)"
          transition="0.3s"
          _hover={{ bg: "rgba(255, 255, 255, 0.4)", transform: "scale(1.1)" }}
          onClick={handleNextDate}
        >
          <AiFillCaretRight fontSize="1.8rem" />
        </Box>
      </Flex>

      {/* Custom Calendar Input */}
      <Box
        position="relative"
        mt="3"
        p="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        borderRadius="8px"
        boxShadow="md"
        _hover={{ bg: "#f0f0f0" }}
      >
        {/* Calendar Icon */}
        <IconButton
          icon={<BsCalendarDate />}
          fontSize="1.2rem"
          color="#00548F"
          bg="transparent"
          _hover={{ color: "#0074B7" }}
          position="absolute"
          left="10px"
          cursor="pointer"
        />

        {/* Hidden Date Input */}
        <Input
          type="date"
          p="2"
          fontSize="1rem"
          color="#333"
          borderRadius="6px"
          border="none"
          pl="2.5rem"
          cursor="pointer"
          bg="transparent"
          onChange={handleDateChange}
          value={selectedDate.toISOString().split("T")[0]}
        />
      </Box>
    </Flex>
  );
}

export default HeadDate;
