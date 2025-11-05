"use client";

import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useCart } from "../../app/lib/cart-context";

export function CustomerForm({ isOpen, onClose }) {
  const { sendOrder, isSubmitting } = useCart();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryTime: "",
    paymentMethod: "",
    instructions: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in at least name, email, and phone number.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const success = await sendOrder(formData);
    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        deliveryTime: "",
        paymentMethod: "",
        instructions: "",
        referral: "",
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        maxH="90vh"
        sx={{
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <ModalHeader
          color="whiteAlpha.900"
          borderBottom="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
        >
          Order Information
        </ModalHeader>
        <ModalCloseButton
          color="whiteAlpha.800"
          _hover={{ color: "orange.300" }}
        />

        <ModalBody
          pb={6}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.1)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(249, 115, 22, 0.6)",
              borderRadius: "24px",
            },
          }}
        >
          <form onSubmit={handleSubmit} id="customer-form">
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="whiteAlpha.800">Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  size="md"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "whiteAlpha.900",
                    _placeholder: { color: "whiteAlpha.500" },
                    _hover: {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    _focus: {
                      borderColor: "orange.300",
                      boxShadow: "0 0 0 1px rgba(249, 115, 22, 0.5)",
                    },
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="whiteAlpha.800">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  size="md"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "whiteAlpha.900",
                    _placeholder: { color: "whiteAlpha.500" },
                    _hover: {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    _focus: {
                      borderColor: "orange.300",
                      boxShadow: "0 0 0 1px rgba(249, 115, 22, 0.5)",
                    },
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="whiteAlpha.800">Phone Number</FormLabel>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  size="md"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "whiteAlpha.900",
                    _placeholder: { color: "whiteAlpha.500" },
                    _hover: {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    _focus: {
                      borderColor: "orange.300",
                      boxShadow: "0 0 0 1px rgba(249, 115, 22, 0.5)",
                    },
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="whiteAlpha.800">Delivery Address</FormLabel>
                <Textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                  resize="vertical"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "whiteAlpha.900",
                    _placeholder: { color: "whiteAlpha.500" },
                    _hover: {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    _focus: {
                      borderColor: "orange.300",
                      boxShadow: "0 0 0 1px rgba(249, 115, 22, 0.5)",
                    },
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="whiteAlpha.800">
                  Special Instructions
                </FormLabel>
                <Textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Any special instructions, dietary requirements, or delivery notes"
                  rows={3}
                  resize="vertical"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "whiteAlpha.900",
                    _placeholder: { color: "whiteAlpha.500" },
                    _hover: {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    _focus: {
                      borderColor: "orange.300",
                      boxShadow: "0 0 0 1px rgba(249, 115, 22, 0.5)",
                    },
                  }}
                />
              </FormControl>
            </VStack>
          </form>
        </ModalBody>

        <ModalFooter
          borderTop="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          bg="rgba(15, 23, 42, 0.8)"
          position="sticky"
          bottom={0}
          zIndex={1}
        >
          <Button
            variant="outline"
            mr={3}
            onClick={onClose}
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "whiteAlpha.800",
              _hover: {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            colorScheme="orange"
            type="submit"
            form="customer-form"
            isLoading={isSubmitting}
            loadingText="Sending Order..."
            sx={{
              background: "rgba(76, 34, 4, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              fontWeight: "bold",
              _hover: {
                background: "rgba(91, 41, 6, 0.9)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(32, 14, 2, 0.3)",
              },
            }}
          >
            Send Order
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomerForm;
