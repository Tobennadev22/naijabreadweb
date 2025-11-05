"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FaShoppingCart,
  FaUserEdit,
  FaPaperPlane,
  FaCheckCircle,
  FaMoneyBill,
} from "react-icons/fa";

export function HowToOrder() {
  const steps = [
    {
      icon: FaShoppingCart,
      title: "Add to Cart",
      description:
        "Browse our delicious breads and cakes items, and add your favorites to the cart",
      color: "brand.200",
    },
    {
      icon: FaUserEdit,
      title: "Fill Details",
      description: "Provide your delivery information and special instructions",
      color: "brand.200",
    },
    {
      icon: FaMoneyBill,
      title: "Pay via PayID",
      description:
        "Pay to the payID displayed and click the I Have Paid button to confirm payment",
      color: "brand.200",
    },
    {
      icon: FaPaperPlane,
      title: "Send Order",
      description:
        "Submit your order details and we'll receive it instantly via email",
      color: "brand.200",
    },
    {
      icon: FaCheckCircle,
      title: "Get Confirmation",
      description: "We'll contact you to confirm your order and delivery time",
      color: "brand.200",
    },
  ];

  return (
    <Box
      py={20}
      position="relative"
      sx={{
        background: "rgba(0, 0, 0, 0.26)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Heading
            size="2xl"
            color="whiteAlpha.900"
            fontWeight="bold"
            fontFamily="poppins"
            textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          >
            How to Order
          </Heading>
          <Text
            fontSize="xl"
            color="whiteAlpha.700"
            maxW="2xl"
            lineHeight="1.6"
            fontFamily="inter"
          >
            Getting your fresh bakery items is simple and convenient. Follow
            these easy steps to place your order.
          </Text>
        </VStack>

        {/* Steps */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          gap={8}
        >
          {steps.map((step, index) => (
            <VStack
              key={index}
              spacing={6}
              textAlign="center"
              flex="1"
              maxW="300px"
            >
              {/* Step Number & Icon */}
              <Box position="relative">
                {/* Outer Circle */}
                <Box
                  width="100px"
                  height="100px"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  }}
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "-4px",
                    left: "-4px",
                    right: "-4px",
                    bottom: "-4px",
                    borderRadius: "full",
                    background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                    zIndex: -1,
                  }}
                >
                  {/* Icon */}
                  <Icon
                    as={step.icon}
                    boxSize={8}
                    color={step.color}
                    filter="drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))"
                  />
                </Box>

                {/* Step Number */}
                <Box
                  position="absolute"
                  top="-5px"
                  right="-5px"
                  width="30px"
                  height="30px"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    background: step.color,
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                  }}
                  fontWeight="bold"
                  fontSize="sm"
                  color="white"
                >
                  {index + 1}
                </Box>
              </Box>

              {/* Step Content */}
              <VStack spacing={3}>
                <Heading size="md" color="whiteAlpha.900" fontWeight="semibold">
                  {step.title}
                </Heading>
                <Text color="whiteAlpha.700" lineHeight="1.6" fontSize="sm">
                  {step.description}
                </Text>
              </VStack>
            </VStack>
          ))}
        </Flex>

        {/* Additional Info */}
        <Box
          mt={16}
          p={8}
          borderRadius="2xl"
          textAlign="center"
          sx={{
            background: "rgba(249, 115, 22, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(249, 115, 22, 0.2)",
          }}
        >
          <VStack spacing={4}>
            <Heading size="lg" color="brand.200" fontFamily="poppins">
              Need Help?
            </Heading>
            <Text color="whiteAlpha.800" fontSize="lg">
              Our team is here to assist you with your order. Use the WhatsApp
              button for quick questions!
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default HowToOrder;
