"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import NextLink from "next/link";

export function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      mt={20}
      pt={12}
      pb={8}
      sx={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.5), transparent)",
      }}
    >
      <Container maxW="container.xl">
        {/* Main Footer Content */}
        <VStack spacing={8}>
          {/* Social Links & Main Text */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            width="full"
            gap={6}
          >
            {/* Left Side - Brand */}
            <VStack align={{ base: "center", md: "start" }} spacing={3}>
              <Text fontSize="3xl" fontWeight="bold" color="brand.200">
                Naijabreads
              </Text>
              <Text
                color="whiteAlpha.600"
                textAlign={{ base: "center", md: "left" }}
                maxW="300px"
              >
                Delicious breads and cakes crafted with passion and tradition
              </Text>
            </VStack>

            {/* Right Side - Social Links */}
            <VStack spacing={4}>
              <Text color="whiteAlpha.700" fontWeight="medium">
                Follow Our Journey
              </Text>
              <HStack spacing={3}>
                <Link
                  as={NextLink}
                  href="https://www.instagram.com/naijabreads/"
                >
                  <IconButton
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    size="lg"
                    variant="ghost"
                    sx={{
                      color: "whiteAlpha.700",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      _hover: {
                        color: "orange.300",
                        background: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(249, 115, 22, 0.2)",
                      },
                      transition: "all 0.3s ease",
                    }}
                    isExternal
                  />
                </Link>
                {/* <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  size="lg"
                  variant="ghost"
                  sx={{
                    color: "whiteAlpha.700",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    _hover: {
                      color: "orange.300",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(249, 115, 22, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  isExternal
                /> */}
                {/* <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  size="lg"
                  variant="ghost"
                  sx={{
                    color: "whiteAlpha.700",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    _hover: {
                      color: "orange.300",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(249, 115, 22, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                /> */}
                {/* <IconButton
                  aria-label="Email"
                  icon={<FaEnvelope />}
                  size="lg"
                  variant="ghost"
                  sx={{
                    color: "whiteAlpha.700",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    _hover: {
                      color: "orange.300",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(249, 115, 22, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                /> */}
              </HStack>
            </VStack>
          </Flex>

          {/* Divider */}
          <Box
            width="100%"
            height="1px"
            background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
          />

          {/* "Baked with Love" Section */}
          <VStack spacing={4}>
            {/* Animated Heart */}
            <Box
              position="relative"
              _hover={{
                transform: "scale(1.1)",
              }}
              transition="all 0.3s ease"
            >
              <Box
                as={FaHeart}
                color="red.400"
                fontSize="2xl"
                filter="drop-shadow(0 0 10px rgba(239, 68, 68, 0.4))"
                animation="pulse 2s infinite"
              />

              {/* Floating particles around the heart */}
              <Box
                position="absolute"
                top="-5px"
                left="-5px"
                width="10px"
                height="10px"
                borderRadius="full"
                background="rgba(249, 115, 22, 0.6)"
                animation="float 3s ease-in-out infinite"
                boxShadow="0 0 10px rgba(249, 115, 22, 0.5)"
              />
              <Box
                position="absolute"
                top="-2px"
                right="-8px"
                width="8px"
                height="8px"
                borderRadius="full"
                background="rgba(239, 68, 68, 0.6)"
                animation="float 3s ease-in-out infinite 0.5s"
                boxShadow="0 0 8px rgba(239, 68, 68, 0.5)"
              />
              <Box
                position="absolute"
                bottom="-6px"
                left="50%"
                transform="translateX(-50%)"
                width="6px"
                height="6px"
                borderRadius="full"
                background="rgba(255, 255, 255, 0.6)"
                animation="float 3s ease-in-out infinite 1s"
                boxShadow="0 0 6px rgba(255, 255, 255, 0.5)"
              />
            </Box>

            {/* Main "Baked with Love" Text */}
            <VStack spacing={2}>
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="whiteAlpha.900"
                textAlign="center"
                textShadow="0 2px 20px rgba(0, 0, 0, 0.5)"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, orange.300, transparent)",
                  borderRadius: "full",
                }}
              >
                Baked with Love
              </Text>

              <Text
                color="whiteAlpha.600"
                fontSize="sm"
                textAlign="center"
                maxW="400px"
              >
                Every loaf tells a story of passion, tradition, and the warmth
                of home
              </Text>
            </VStack>
          </VStack>

          {/* Bottom Section */}
          <VStack spacing={4} width="full">
            {/* Quick Links */}
            {/* <HStack spacing={6} flexWrap="wrap" justify="center">
              <Link
                href="/about"
                color="whiteAlpha.700"
                _hover={{ color: "orange.300", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                color="whiteAlpha.700"
                _hover={{ color: "orange.300", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                Contact
              </Link>
              <Link
                href="/delivery"
                color="whiteAlpha.700"
                _hover={{ color: "orange.300", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                Delivery Info
              </Link>
              <Link
                href="/privacy"
                color="whiteAlpha.700"
                _hover={{ color: "orange.300", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                color="whiteAlpha.700"
                _hover={{ color: "orange.300", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                Terms of Service
              </Link> */}
            {/* </HStack> */}

            {/* Copyright */}
            <Text color="whiteAlpha.500" fontSize="sm" textAlign="center">
              © {new Date().getFullYear()} Naijabreads. All rights reserved.
            </Text>
          </VStack>
        </VStack>
      </Container>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.4));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.6));
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default Footer;
