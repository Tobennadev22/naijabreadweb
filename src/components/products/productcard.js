// "use client";

// import { Box, Heading, Text, Badge, Button, Flex } from "@chakra-ui/react";
// import { useCart } from "../../app/lib/cart-context";

// export function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   return (
//     <Box
//       bg="white"
//       borderRadius="lg"
//       overflow="hidden"
//       shadow="lg"
//       transition="transform 0.2s"
//       _hover={{ transform: "translateY(-4px)" }}
//     >
//       <Box
//         height="200px"
//         bg="gray.200"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Text color="gray.500">Bread Image</Text>
//       </Box>

//       <Box p={6}>
//         <Flex justify="space-between" align="start" mb={2}>
//           <Heading size="md" color="gray.700">
//             {product.name}
//           </Heading>
//           <Badge colorScheme="orange" fontSize="md">
//             ${product.price}
//           </Badge>
//         </Flex>

//         <Text color="gray.600" mb={4}>
//           {product.description}
//         </Text>

//         <Button
//           colorScheme="orange"
//           width="full"
//           onClick={() => addToCart(product)}
//         >
//           Add to Cart
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default ProductCard;

// 'use client'

import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useCart } from "../../app/lib/cart-context";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        shadow: "2xl",
      }}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        borderRadius: "2xl",
        zIndex: -1,
      }}
    >
      {/* Product Image with Glass Overlay */}
      <Box position="relative" height="200px" overflow="hidden">
        <Image
          src={product.image}
          alt={product.name}
          width="100%"
          height="100%"
          objectFit="cover"
          transition="transform 0.3s ease"
          _groupHover={{
            transform: "scale(1.1)",
          }}
          fallback={
            <Box
              height="100%"
              bg="gray.600"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="linear-gradient(135deg, #4A5568 0%, #2D3748 100%)"
            >
              <Text color="whiteAlpha.800" fontSize="lg" fontWeight="medium">
                {product.name}
              </Text>
            </Box>
          }
        />

        {/* Glass Overlay on Image */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)"
          opacity="0.6"
        />

        {/* Price Badge */}
        <Badge
          position="absolute"
          top="3"
          right="3"
          colorScheme="orange"
          borderRadius="full"
          px="3"
          py="1"
          fontSize="xs"
          fontWeight="bold"
          sx={{
            background: "rgba(237, 137, 54, 0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          ${product.price}
        </Badge>

        {/* Category Badge */}
        <Badge
          position="absolute"
          top="3"
          left="3"
          colorScheme="whiteAlpha"
          borderRadius="full"
          px="2"
          py="1"
          fontSize="xs"
          fontWeight="medium"
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {product.category}
        </Badge>
      </Box>

      {/* Card Content */}
      <Box p={6}>
        <Flex justify="space-between" align="start" mb={3}>
          <Heading size="md" color="whiteAlpha.900" fontWeight="semibold">
            {product.name}
          </Heading>
        </Flex>

        <Text color="whiteAlpha.700" mb={6} lineHeight="1.6" fontSize="sm">
          {product.description}
        </Text>

        <Button
          width="full"
          size="lg"
          fontWeight="bold"
          borderRadius="xl"
          sx={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            transition: "all 0.3s ease",
            _hover: {
              background: "rgba(255, 255, 255, 0.25)",
              transform: "translateY(-2px)",
              shadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            },
            _active: {
              background: "rgba(255, 255, 255, 0.3)",
              transform: "translateY(0)",
            },
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCard;
