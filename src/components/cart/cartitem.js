
"use client";

import { Box, Flex, Heading, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../../app/lib/cart-context";

export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Box
      p={4}
      borderRadius="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        shadow: "lg",
      }}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
      }}
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Heading size="sm" color="whiteAlpha.900" fontWeight="semibold">
          {item.name}
        </Heading>
        <Text fontWeight="bold" color="orange.300">
          ${item.price}
        </Text>
      </Flex>

      <Flex justify="space-between" align="center">
        <HStack>
          <IconButton
            icon={<FaMinus />}
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "whiteAlpha.900",
              _hover: {
                background: "rgba(255, 255, 255, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          />
          <Text
            minW="40px"
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
          >
            {item.quantity}
          </Text>
          <IconButton
            icon={<FaPlus />}
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "whiteAlpha.900",
              _hover: {
                background: "rgba(255, 255, 255, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          />
        </HStack>

        <Text fontWeight="bold" color="orange.300" fontSize="lg">
          ${(item.price * item.quantity).toFixed(2)}
        </Text>

        <IconButton
          icon={<FaTrash />}
          size="sm"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
          sx={{
            background: "rgba(239, 68, 68, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            color: "red.300",
            _hover: {
              background: "rgba(239, 68, 68, 0.3)",
              transform: "scale(1.05)",
            },
          }}
        />
      </Flex>
    </Box>
  );
}

export default CartItem;
