// "use client";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   VStack,
//   Box,
//   Flex,
//   Text,
//   Button,
// } from "@chakra-ui/react";
// import { CartItem } from "./cartitem";
// import { useCart } from "../../app/lib/cart-context";

// export function CartDrawer({ isOpen, onClose }) {
//   const { cart, getTotalPrice, clearCart } = useCart();

//   return (
//     <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
//       <DrawerOverlay />
//       <DrawerContent>
//         <DrawerCloseButton />
//         <DrawerHeader borderBottomWidth="1px">Your Shopping Cart</DrawerHeader>

//         <DrawerBody>
//           {cart.length === 0 ? (
//             <Text textAlign="center" mt={8} color="gray.500">
//               Your cart is empty
//             </Text>
//           ) : (
//             <VStack spacing={4} align="stretch" mt={4}>
//               {cart.map((item) => (
//                 <CartItem key={item.id} item={item} />
//               ))}

//               <Box pt={4} borderTopWidth="1px">
//                 <Flex justify="space-between" align="center" mb={4}>
//                   <Text fontSize="xl" fontWeight="bold">
//                     Total: ${getTotalPrice()}
//                   </Text>
//                 </Flex>

//                 <Flex gap={2}>
//                   <Button flex={1} variant="outline" onClick={clearCart}>
//                     Clear Cart
//                   </Button>
//                   <Button colorScheme="orange" flex={2} size="lg">
//                     Checkout
//                   </Button>
//                 </Flex>
//               </Box>
//             </VStack>
//           )}
//         </DrawerBody>
//       </DrawerContent>
//     </Drawer>
//   );
// }

// export default CartDrawer;

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
import { useCart } from "../../app/lib/cart-context";

export function CartDrawer({ isOpen, onClose }) {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);

  const handleSendOrderClick = () => {
    if (cart.length === 0) {
      return;
    }
    setIsCustomerFormOpen(true);
  };

  const handleCustomerFormClose = () => {
    setIsCustomerFormOpen(false);
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
                        background: "rgba(249, 115, 22, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontWeight: "bold",
                        _hover: {
                          background: "rgba(249, 115, 22, 0.9)",
                          transform: "translateY(-2px)",
                          shadow: "0 8px 25px rgba(249, 115, 22, 0.3)",
                        },
                      }}
                    >
                      Send Order
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <CustomerForm
        isOpen={isCustomerFormOpen}
        onClose={handleCustomerFormClose}
      />
    </>
  );
}

export default CartDrawer;
