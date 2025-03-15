import { 
  Box, Button, Center, Input, Text, useToast 
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const onLogin = async () => {
    const data = { email, password };

    try {
      const res = await axios.post("http://localhost:5000/login", data);
      console.log(res.data);
      
      if (res.data.message !== "Invalid Credentials") {
        localStorage.setItem("fitUserID", res.data.message.data.id);
        let user = JSON.parse(localStorage.getItem("user"));
        
        toast({
          title: "Logged In Successfully 🎉",
          description: `Welcome back, ${user?.username || "User"}!`,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

        navigate("/home");
      } else {
        toast({
          title: "Invalid Credentials ❌",
          description: "Please check your email or password",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Oops! Something went wrong 😕",
        description: "Please try again later.",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    toast({
      title: "Welcome Back! 😊",
      description: "Sign up if you don't have an account.",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  }, []);

  return (
    <Center height="70vh" >
      <Box 
        bg="white" 
        p={8} 
        borderRadius="md" 
        boxShadow="lg"
        width="450px"
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="blue.600" mb={4}>
          Member Login
        </Text>

        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={3}
          borderRadius="md"
          focusBorderColor="blue.500"
          _hover={{ borderColor: "blue.300" }}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={3}
          borderRadius="md"
          focusBorderColor="blue.500"
          _hover={{ borderColor: "blue.300" }}
        />

        <Text 
          fontSize="sm" 
          color="blue.500" 
          textAlign="right" 
          cursor="pointer"
          mb={4}
          _hover={{ textDecoration: "underline" }}
        >
          Forgot Password?
        </Text>

        <Button 
          colorScheme="blue"
          w="100%"
          borderRadius="md"
          mb={4}
          onClick={onLogin}
          _hover={{ bg: "blue.600" }}
        >
          LOG IN
        </Button>

        <Text fontSize="sm" color="gray.500">
          Not a member?{" "}
          <Link to="/signup1">
            <Text as="span" fontWeight="bold" color="blue.500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
              Sign Up Now
            </Text>
          </Link>
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
