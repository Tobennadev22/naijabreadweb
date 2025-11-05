"use client";

import { useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ProductGrid } from "../components/products/productgrid";
import { CartDrawer } from "../components/cart/cartdrawer";
import { bakeryItems } from "../app/data/products";
import { HowToOrder } from "../components/howtoorder/howtoorder";
import { WhatsAppButton } from "../components/whatsapp/whatsapp";

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
          radial-gradient(circle at 20% 80%, rgba(46, 164, 3, 0.26) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(119, 70, 2, 0.18) 0%, transparent 50%),
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
              fontFamily="poppins"
            >
              Bread Wey Too Sweet
            </Heading>
            <Text
              fontSize="xl"
              color="whiteAlpha.800"
              maxW="2xl"
              mx="auto"
              lineHeight="1.6"
              fontFamily="poppins"
            >
              Delicious homemade bread and cakes made with love and the finest
              ingredients.
            </Text>
          </Container>
        </Box>

        <ProductGrid products={bakeryItems} />
        <WhatsAppButton />
        <HowToOrder />
        <Footer />

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </Box>
    </Box>
  );
}
