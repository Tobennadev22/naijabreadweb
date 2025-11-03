// "use client";

// import { createContext, useContext, useReducer } from "react";
// import { useToast } from "@chakra-ui/react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         return {
//           ...state,
//           items: state.items.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           items: [...state.items, { ...action.payload, quantity: 1 }],
//         };
//       }

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

//     case "UPDATE_QUANTITY":
//       if (action.payload.quantity < 1) {
//         return {
//           ...state,
//           items: state.items.filter((item) => item.id !== action.payload.id),
//         };
//       }
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };

//     case "CLEAR_CART":
//       return {
//         ...state,
//         items: [],
//       };

//     default:
//       return state;
//   }
// };

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(cartReducer, { items: [] });
//   const toast = useToast();

//   const addToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//     toast({
//       title: "Added to cart!",
//       description: `${product.name} has been added to your cart.`,
//       status: "success",
//       duration: 2000,
//       isClosable: true,
//     });
//   };

//   const removeFromCart = (productId) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: productId });
//     toast({
//       title: "Removed from cart",
//       status: "info",
//       duration: 1500,
//       isClosable: true,
//     });
//   };

//   const updateQuantity = (productId, quantity) => {
//     dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   const getTotalItems = () => {
//     return state.items.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return state.items
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart: state.items,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         getTotalItems,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

"use client";

import { createContext, useContext, useReducer, useState } from "react";
import { useToast } from "@chakra-ui/react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      if (action.payload.quantity < 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    toast({
      title: "Removed from cart",
      status: "info",
      duration: 1500,
      isClosable: true,
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const sendOrder = async (customerInfo) => {
    if (state.items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before sending an order.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: state.items,
          customerInfo,
        }),
      });

      if (response.ok) {
        toast({
          title: "Order Sent!",
          description: "Your order has been received. We'll contact you soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        clearCart();
        return true;
      } else {
        throw new Error("Failed to send order");
      }
    } catch (error) {
      console.error("Error sending order:", error);
      toast({
        title: "Error",
        description: "Failed to send order. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        sendOrder,
        isSubmitting,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
