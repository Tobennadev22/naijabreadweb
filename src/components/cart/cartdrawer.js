"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { CartItem } from "./cartitem";
import { CustomerForm } from "./customerform";
import { PaymentModal } from "../payment/paymentmodal";
import { useCart } from "../../app/lib/cart-context";

export function CartDrawer({ isOpen, onClose }) {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleSendOrderClick = () => {
    if (cart.length === 0) {
      return;
    }
    // Show payment modal first
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    // After payment is confirmed, show customer form
    setIsCustomerFormOpen(true);
  };

  const handleCustomerFormClose = () => {
    setIsCustomerFormOpen(false);
    // Close the cart drawer when form is closed
    onClose();
  };

  const handlePaymentModalClose = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent
          sx={{
            background: "rgba(15, 23, 42, 0.9)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <DrawerCloseButton
            color="whiteAlpha.800"
            _hover={{ color: "orange.300" }}
            size="lg"
            top={3}
            right={3}
          />
          <DrawerHeader
            borderBottom="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            color="whiteAlpha.900"
            fontSize="2xl"
            fontWeight="bold"
            pt={8}
          >
            Your Shopping Cart
          </DrawerHeader>

          <DrawerBody py={6}>
            {cart.length === 0 ? (
              <Text
                textAlign="center"
                mt={8}
                color="whiteAlpha.600"
                fontSize="lg"
              >
                Your cart is empty
              </Text>
            ) : (
              <VStack spacing={4} align="stretch" mt={4}>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}

                <Box
                  pt={4}
                  borderTop="1px solid"
                  borderColor="rgba(255, 255, 255, 0.1)"
                >
                  <Flex justify="space-between" align="center" mb={6}>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color="whiteAlpha.900"
                    >
                      Total:
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" color="orange.300">
                      ${getTotalPrice()}
                    </Text>
                  </Flex>

                  {/* Payment Method Notice */}
                  <Box
                    mb={4}
                    p={3}
                    borderRadius="lg"
                    sx={{
                      background: "rgba(249, 115, 22, 0.1)",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                    }}
                  >
                    <Text
                      color="orange.300"
                      fontSize="sm"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      💳 Pay with PayID (Australia)
                    </Text>
                  </Box>

                  <Flex gap={3}>
                    <Button
                      flex={1}
                      variant="outline"
                      onClick={clearCart}
                      size="lg"
                      sx={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "whiteAlpha.800",
                        _hover: {
                          background: "rgba(255, 255, 255, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Clear Cart
                    </Button>
                    <Button
                      flex={2}
                      size="lg"
                      onClick={handleSendOrderClick}
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
                      Proceed to Pay
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handlePaymentModalClose}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Customer Form */}
      <CustomerForm
        isOpen={isCustomerFormOpen}
        onClose={handleCustomerFormClose}
      />
    </>
  );
}

export default CartDrawer;
