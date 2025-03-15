import React, { useState } from "react";
import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import { BsFillPencilFill } from "react-icons/bs";

function Note({ edit, setEdit }) {
  const [note, setNote] = useState("");

  return (
    <Box
      p="1.5rem 0"
      borderBottom="1px solid lightgrey"
      borderRadius="10px"
      bg="white"
      boxShadow="md"
      transition="0.3s ease-in-out"
      mt="1rem"
    >
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" px="1.5rem">
        <Text
          fontSize="20px"
          fontWeight="bold"
          textTransform="capitalize"
          color="#00548F"
        >
          Today's Exercise Notes
        </Text>

        {/* Edit/Save Button */}
        <Flex
          color="#0074B7"
          gap="0.5rem"
          fontWeight="bold"
          cursor="pointer"
          alignItems="center"
          textDecoration="underline"
          _hover={{ transform: "scale(1.05)", transition: "0.2s ease-in-out" }}
          onClick={() => setEdit(!edit)}
        >
          <Text>{!edit ? "Edit" : "Save"} Note</Text>
          <BsFillPencilFill />
        </Flex>
      </Flex>

      {/* Note Content */}
      <Box mt="1rem" px="1.5rem">
        {edit ? (
          <Textarea
            placeholder="Write your notes here..."
            h="120px"
            fontSize="16px"
            border="1px solid #0074B7"
            borderRadius="8px"
            _focus={{ borderColor: "#00548F", boxShadow: "lg" }}
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        ) : (
          <Flex
            bg="#F6F9FC"
            borderRadius="8px"
            p="1.2rem"
            h="120px"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            border="1px solid #E0E0E0"
          >
            <Text fontWeight="extrabold" fontSize="20px">“</Text>
            <Text fontWeight="medium" fontSize="18px" color="#444">
              {note ? note : "Add today's note..."}
            </Text>
            <Text fontWeight="extrabold" fontSize="20px">”</Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default Note;
