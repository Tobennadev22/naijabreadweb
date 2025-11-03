// "use client";

// import { useState } from "react";
// import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
// import { Header } from "../layout/Header";
// import { ProductGrid } from "../components/products/productgrid";
// import { CartDrawer } from "../components/cart/cartdrawer";
// import { bakeryItems } from "../app/data/products";
// import NextLink from "next/link";

// export default function Home() {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   return (
//     <Box
//       minH="100vh"
//       bgImage="url('/bananabread.png')"
//       bgPosition="center"
//       bgRepeat="no-repeat"
//       bgSize="cover"
//     >
//       <Box
//         position="absolute"
//         top="0"
//         left="0"
//         width="100%"
//         height="100%"
//         bg="neutral.500"
//         _before={{
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backdropFilter: "blur(8px)", // 🔥 blur effect
//           bg: "rgba(0,0,0,0.4)", // optional dark overlay
//         }}
//         zIndex="-1"
//       />
//       <Header onCartOpen={() => setIsCartOpen(true)} />

//       {/* Hero Section */}
//       <Box
//         bgPosition="center"
//         bgRepeat="no-repeat"
//         bgSize="cover"
//         minH="40vh"
//         position="relative"
//         py={16}
//       >
//         <Container maxW="container.xl" textAlign="center">
//           <Text
//             fontSize={["2xl", "3xl", "5xl"]}
//             color="white"
//             fontWeight="semibold"
//           >
//             Freshly Baked Bread
//           </Text>
//         </Container>
//       </Box>

//       <ProductGrid zIndex="1000" products={bakeryItems} />

//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </Box>
//   );
// }

"use client";

import { useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ProductGrid } from "../components/products/productgrid";
import { CartDrawer } from "../components/cart/cartdrawer";
import { bakeryItems } from "../app/data/products";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Box
      // minH="100vh"
      bgImage="url('/bananabread.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      // bg="linear-gradient(135deg, #0f172a 0%, #0c1017ff 50%, #000000ff 100%)"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(251, 172, 62, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%)
        `,
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        <Header onCartOpen={() => setIsCartOpen(true)} />

        {/* Hero Section with Glass Effect */}
        <Box
          py={20}
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(40px)",
            zIndex: -1,
          }}
        >
          <Container maxW="container.xl" textAlign="center" position="relative">
            <Heading
              size="2xl"
              mb={6}
              color="whiteAlpha.900"
              fontWeight="bold"
              textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
            >
              Freshly Baked Daily
            </Heading>
            <Text
              fontSize="xl"
              color="whiteAlpha.800"
              maxW="2xl"
              mx="auto"
              lineHeight="1.6"
            >
              Discover our artisan breads and pastries, baked with love and
              tradition. Each piece crafted to perfection for your delight.
            </Text>
          </Container>
        </Box>

        <ProductGrid products={bakeryItems} />
        <Footer />

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </Box>
    </Box>
  );
}
