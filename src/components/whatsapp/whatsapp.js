"use client";

import { Box, IconButton, Text, VStack, HStack } from "@chakra-ui/react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348067049945";
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Hi! I'd like to see availabe cakes and place an order.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      // Open WhatsApp directly if not expanded, or show options if expanded
      window.open(whatsappUrl, "_blank");
    }
  };

  const quickMessages = [
    {
      text: "What's today's special?",
      message: "Hi! What's today's special bread or pastry?",
    },
    {
      text: "Do you have gluten-free options?",
      message: "Hi! Do you have any gluten-free bread options?",
    },
    {
      text: "What are your delivery hours?",
      message: "Hi! What are your delivery hours and areas?",
    },
  ];

  const sendQuickMessage = (quickMessage) => {
    const quickWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      quickMessage
    )}`;
    window.open(quickWhatsappUrl, "_blank");
    setIsExpanded(false);
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <Box position="fixed" bottom="6" right="6" zIndex="1000">
        {/* Quick Message Options */}
        {isExpanded && (
          <VStack
            spacing={3}
            mb={4}
            align="end"
            sx={{
              animation: "slideUp 0.3s ease-out",
            }}
          >
            {quickMessages.map((item, index) => (
              <Box
                key={index}
                onClick={() => sendQuickMessage(item.message)}
                p={3}
                borderRadius="lg"
                sx={{
                  background: "rgba(80, 140, 2, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  _hover: {
                    background: "rgba(102, 176, 4, 0.8)",
                    transform: "translateX(-5px)",
                  },
                }}
                maxW="200px"
              >
                <Text fontSize="sm" fontWeight="medium">
                  {item.text}
                </Text>
              </Box>
            ))}
          </VStack>
        )}

        {/* Main Button */}
        <HStack spacing={3}>
          {isExpanded && (
            <Box
              p={3}
              borderRadius="lg"
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
            >
              <Text fontSize="sm" fontWeight="bold">
                Quick Chat
              </Text>
            </Box>
          )}

          <IconButton
            icon={isExpanded ? <FaTimes /> : <FaWhatsapp />}
            onClick={handleClick}
            isRound
            size="lg"
            fontSize="24px"
            sx={{
              background: "rgba(80, 140, 2, 0.8)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              transition: "all 0.3s ease",
              _hover: {
                background: "rgba(99, 172, 3, 0.8)",
                transform: "scale(1.1)",
                boxShadow: "0 8px 25px rgba(51, 88, 2, 0.8)",
              },
              animation: isExpanded ? "none" : "pulse 2s infinite",
            }}
            aria-label="WhatsApp Chat"
          />
        </HStack>
      </Box>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(132, 224, 11, 0.8);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}

export default WhatsAppButton;
