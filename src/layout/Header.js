// "use client";

// import { Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useCart } from "../app/lib/cart-context";

// export function Header({ onCartOpen }) {
//   const { getTotalItems } = useCart();

//   return (
//     <Box bg="white" shadow="md" py={4}>
//       <Container maxW="container.xl">
//         <Flex justify="space-between" align="center">
//           <Heading color="neutral.700">Naijabreads</Heading>
//           <Button
//             colorScheme="orange"
//             leftIcon={<FaShoppingCart />}
//             onClick={onCartOpen}
//           >
//             Cart ({getTotalItems()})
//           </Button>
//         </Flex>
//       </Container>
//     </Box>
//   );
// }

// // Add default export
// export default Header;

"use client";

import { Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../app/lib/cart-context";

export function Header({ onCartOpen }) {
  const { getTotalItems } = useCart();

  return (
    <Box
      // py={4}
      // sx={{
      //   background: "rgba(255, 255, 255, 0.08)",
      //   backdropFilter: "blur(20px)",
      //   borderBottom: "1px solid",
      //   borderColor: "rgba(255, 255, 255, 0.1)",
      // }}

      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      transition="all 0.3s ease"
      sx={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
      _hover={{
        background: "rgba(15, 23, 42, 0.98)",
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading
            color="white"
            fontSize="3xl"
            fontWeight="bold"
            textShadow="0 2px 10px rgba(249, 115, 22, 0.3)"
          >
            NaijaBread
          </Heading>
          <Button
            size="lg"
            fontWeight="semibold"
            borderRadius="xl"
            leftIcon={<FaShoppingCart />}
            onClick={onCartOpen}
            sx={{
              background: "rgba(80, 140, 2, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.53)",
              color: "white",
              transition: "all 0.3s ease",
              _hover: {
                background: "rgba(94, 164, 2, 0.8)",
                transform: "translateY(-2px)",
                shadow: "0 8px 25px rgba(71, 249, 22, 0.22)",
              },
            }}
          >
            Cart ({getTotalItems()})
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
