"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../app/lib/cart-context";
import theme from "../theme";

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  );
}
