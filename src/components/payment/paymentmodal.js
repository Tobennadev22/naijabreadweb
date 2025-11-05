// "use client";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   VStack,
//   Text,
//   Box,
//   Flex,
//   Icon,
//   useToast,
//   HStack,
//   Divider,
// } from "@chakra-ui/react";
// import { FaCopy, FaCheck, FaQrcode, FaMobileAlt } from "react-icons/fa";
// import { useState } from "react";

// export function PaymentModal({ isOpen, onClose, onPaymentSuccess }) {
//   const [copiedField, setCopiedField] = useState(null);
//   const toast = useToast();

//   // Payment details - you can move these to environment variables if needed
//   const paymentDetails = {
//     payId: process.env.NEXT_PUBLIC_PAYID_NUMBER || "0412345678",
//     payIdName: process.env.NEXT_PUBLIC_PAYID_NAME || "Fresh Bakery",
//     payIdType: process.env.NEXT_PUBLIC_PAYID_TYPE || "Mobile Number",
//     amount: "0.00", // This will be set dynamically based on cart total
//     reference: "BAKERYORDER",
//   };

//   const copyToClipboard = async (text, field) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopiedField(field);
//       toast({
//         title: "Copied!",
//         description: `${field} copied to clipboard`,
//         status: "success",
//         duration: 2000,
//         isClosable: true,
//       });
//       setTimeout(() => setCopiedField(null), 2000);
//     } catch (err) {
//       toast({
//         title: "Copy failed",
//         description: "Please copy the details manually",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePaymentComplete = () => {
//     onPaymentSuccess();
//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size="lg"
//       closeOnOverlayClick={false}
//     >
//       <ModalOverlay bg="blackAlpha.600" />
//       <ModalContent
//         sx={{
//           background: "rgba(15, 23, 42, 0.95)",
//           backdropFilter: "blur(20px)",
//           border: "1px solid rgba(255, 255, 255, 0.1)",
//         }}
//       >
//         <ModalHeader
//           color="whiteAlpha.900"
//           borderBottom="1px solid"
//           borderColor="rgba(255, 255, 255, 0.1)"
//           textAlign="center"
//         >
//           Pay with PayID
//         </ModalHeader>
//         <ModalCloseButton
//           color="whiteAlpha.800"
//           _hover={{ color: "orange.300" }}
//         />

//         <ModalBody py={6}>
//           <VStack spacing={6}>
//             {/* Payment Instructions */}
//             <Box textAlign="center">
//               <Icon as={FaMobileAlt} boxSize={8} color="green.400" mb={3} />
//               <Text fontSize="lg" color="whiteAlpha.800" fontWeight="medium">
//                 Quick & Secure Payment
//               </Text>
//               <Text color="whiteAlpha.600" fontSize="sm" mt={2}>
//                 Use your banking app to pay instantly with PayID
//               </Text>
//             </Box>

//             {/* PayID Details Card */}
//             <Box
//               width="100%"
//               p={6}
//               borderRadius="xl"
//               sx={{
//                 background: "rgba(255, 255, 255, 0.05)",
//                 backdropFilter: "blur(10px)",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//               }}
//             >
//               <VStack spacing={4} align="stretch">
//                 {/* PayID Number */}
//                 <Box>
//                   <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
//                     PayID Number
//                   </Text>
//                   <Flex justify="space-between" align="center">
//                     <Text
//                       color="whiteAlpha.900"
//                       fontSize="xl"
//                       fontWeight="bold"
//                     >
//                       {paymentDetails.payId}
//                     </Text>
//                     <Button
//                       size="sm"
//                       onClick={() =>
//                         copyToClipboard(paymentDetails.payId, "PayID")
//                       }
//                       leftIcon={
//                         copiedField === "PayID" ? <FaCheck /> : <FaCopy />
//                       }
//                       sx={{
//                         background:
//                           copiedField === "PayID"
//                             ? "green.500"
//                             : "rgba(255, 255, 255, 0.1)",
//                         backdropFilter: "blur(10px)",
//                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                         color: "white",
//                         _hover: {
//                           background:
//                             copiedField === "PayID"
//                               ? "green.600"
//                               : "rgba(255, 255, 255, 0.2)",
//                         },
//                       }}
//                     >
//                       {copiedField === "PayID" ? "Copied!" : "Copy"}
//                     </Button>
//                   </Flex>
//                 </Box>

//                 {/* PayID Name */}
//                 <Box>
//                   <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
//                     Registered Name
//                   </Text>
//                   <Flex justify="space-between" align="center">
//                     <Text
//                       color="whiteAlpha.900"
//                       fontSize="lg"
//                       fontWeight="medium"
//                     >
//                       {paymentDetails.payIdName}
//                     </Text>
//                     <Button
//                       size="sm"
//                       onClick={() =>
//                         copyToClipboard(paymentDetails.payIdName, "Name")
//                       }
//                       leftIcon={
//                         copiedField === "Name" ? <FaCheck /> : <FaCopy />
//                       }
//                       sx={{
//                         background:
//                           copiedField === "Name"
//                             ? "green.500"
//                             : "rgba(255, 255, 255, 0.1)",
//                         backdropFilter: "blur(10px)",
//                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                         color: "white",
//                         _hover: {
//                           background:
//                             copiedField === "Name"
//                               ? "green.600"
//                               : "rgba(255, 255, 255, 0.2)",
//                         },
//                       }}
//                     >
//                       {copiedField === "Name" ? "Copied!" : "Copy"}
//                     </Button>
//                   </Flex>
//                 </Box>

//                 <Divider borderColor="rgba(255, 255, 255, 0.1)" />

//                 {/* Payment Type */}
//                 <Box>
//                   <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
//                     PayID Type
//                   </Text>
//                   <Text color="whiteAlpha.900" fontSize="md">
//                     {paymentDetails.payIdType}
//                   </Text>
//                 </Box>

//                 {/* Reference */}
//                 <Box>
//                   <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
//                     Reference (Important)
//                   </Text>
//                   <Flex justify="space-between" align="center">
//                     <Text
//                       color="whiteAlpha.900"
//                       fontSize="md"
//                       fontFamily="mono"
//                     >
//                       {paymentDetails.reference}
//                     </Text>
//                     <Button
//                       size="sm"
//                       onClick={() =>
//                         copyToClipboard(paymentDetails.reference, "Reference")
//                       }
//                       leftIcon={
//                         copiedField === "Reference" ? <FaCheck /> : <FaCopy />
//                       }
//                       sx={{
//                         background:
//                           copiedField === "Reference"
//                             ? "green.500"
//                             : "rgba(255, 255, 255, 0.1)",
//                         backdropFilter: "blur(10px)",
//                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                         color: "white",
//                         _hover: {
//                           background:
//                             copiedField === "Reference"
//                               ? "green.600"
//                               : "rgba(255, 255, 255, 0.2)",
//                         },
//                       }}
//                     >
//                       {copiedField === "Reference" ? "Copied!" : "Copy"}
//                     </Button>
//                   </Flex>
//                 </Box>
//               </VStack>
//             </Box>

//             {/* Instructions */}
//             <Box
//               p={4}
//               borderRadius="lg"
//               sx={{
//                 background: "rgba(249, 115, 22, 0.1)",
//                 border: "1px solid rgba(249, 115, 22, 0.2)",
//               }}
//             >
//               <VStack spacing={2} align="start">
//                 <Text color="orange.300" fontWeight="medium" fontSize="sm">
//                   How to Pay:
//                 </Text>
//                 <Text color="whiteAlpha.700" fontSize="sm">
//                   1. Open your banking app
//                 </Text>
//                 <Text color="whiteAlpha.700" fontSize="sm">
//                   2. Select "Pay with PayID"
//                 </Text>
//                 <Text color="whiteAlpha.700" fontSize="sm">
//                   3. Enter the PayID number above
//                 </Text>
//                 <Text color="whiteAlpha.700" fontSize="sm">
//                   4. Use the reference:{" "}
//                   <Text as="span" fontFamily="mono">
//                     {paymentDetails.reference}
//                   </Text>
//                 </Text>
//               </VStack>
//             </Box>

//             {/* Important Note */}
//             <Text
//               color="whiteAlpha.600"
//               fontSize="sm"
//               textAlign="center"
//               fontStyle="italic"
//             >
//               Please complete your payment before proceeding to order details
//             </Text>
//           </VStack>
//         </ModalBody>

//         <ModalFooter
//           borderTop="1px solid"
//           borderColor="rgba(255, 255, 255, 0.1)"
//           bg="rgba(15, 23, 42, 0.8)"
//         >
//           <HStack spacing={3} width="full">
//             <Button
//               flex={1}
//               variant="outline"
//               onClick={onClose}
//               sx={{
//                 background: "rgba(255, 255, 255, 0.05)",
//                 backdropFilter: "blur(10px)",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 color: "whiteAlpha.800",
//                 _hover: {
//                   background: "rgba(255, 255, 255, 0.1)",
//                 },
//               }}
//             >
//               Cancel Order
//             </Button>
//             <Button
//               flex={2}
//               colorScheme="green"
//               size="lg"
//               onClick={handlePaymentComplete}
//               sx={{
//                 background: "rgba(72, 187, 120, 0.8)",
//                 backdropFilter: "blur(10px)",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 color: "white",
//                 fontWeight: "bold",
//                 _hover: {
//                   background: "rgba(72, 187, 120, 0.9)",
//                   transform: "translateY(-2px)",
//                   boxShadow: "0 8px 25px rgba(72, 187, 120, 0.3)",
//                 },
//               }}
//             >
//               I Have Paid ✓
//             </Button>
//           </HStack>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }

// export default PaymentModal;

"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
  Box,
  Flex,
  Icon,
  useToast,
  HStack,
  Divider,
} from "@chakra-ui/react";
import {
  FaCopy,
  FaCheck,
  FaQrcode,
  FaMobileAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { useState } from "react";

export function PaymentModal({ isOpen, onClose, onPaymentSuccess }) {
  const [copiedField, setCopiedField] = useState(null);
  const toast = useToast();

  // Payment details - you can move these to environment variables if needed
  const paymentDetails = {
    payId: process.env.NEXT_PUBLIC_PAYID_NUMBER || "0410283117",
    payIdName: process.env.NEXT_PUBLIC_PAYID_NAME || "Naijabreads",
    payIdType: process.env.NEXT_PUBLIC_PAYID_TYPE || "Mobile Number",
    amount: "0.00", // This will be set dynamically based on cart total
    reference: "THEBREADORCAKENAME",
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the details manually",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handlePaymentComplete = () => {
    onPaymentSuccess();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      closeOnOverlayClick={false}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        maxH="90vh"
        sx={{
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <ModalHeader
          color="whiteAlpha.900"
          borderBottom="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          textAlign="center"
          position="sticky"
          top={0}
          bg="rgba(15, 23, 42, 0.95)"
          zIndex={1}
        >
          Pay with PayID
        </ModalHeader>
        <ModalCloseButton
          color="whiteAlpha.800"
          _hover={{ color: "orange.300" }}
          position="sticky"
          top={2}
          zIndex={2}
        />

        <ModalBody
          py={6}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(249, 115, 22, 0.6)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "rgba(249, 115, 22, 0.8)",
            },
          }}
        >
          <VStack spacing={6}>
            {/* Payment Instructions */}
            {/* <Box textAlign="center">
              <Icon as={FaMobileAlt} boxSize={8} color="green.400" mb={3} />
              <Text fontSize="lg" color="whiteAlpha.800" fontWeight="medium">
                Quick & Secure Payment
              </Text>
              <Text color="whiteAlpha.600" fontSize="sm" mt={2}>
                Use your banking app to pay instantly with PayID
              </Text>
            </Box> */}

            {/* PayID Details Card */}
            <Box
              width="100%"
              p={6}
              borderRadius="xl"
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <VStack spacing={4} align="stretch">
                {/* PayID Number */}
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    PayID Number
                  </Text>
                  <Flex justify="space-between" align="center">
                    <Text
                      color="whiteAlpha.900"
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      {paymentDetails.payId}
                    </Text>
                    <Button
                      size="sm"
                      onClick={() =>
                        copyToClipboard(paymentDetails.payId, "PayID")
                      }
                      leftIcon={
                        copiedField === "PayID" ? <FaCheck /> : <FaCopy />
                      }
                      sx={{
                        background:
                          copiedField === "PayID"
                            ? "green.500"
                            : "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        _hover: {
                          background:
                            copiedField === "PayID"
                              ? "green.600"
                              : "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      {copiedField === "PayID" ? "Copied!" : "Copy"}
                    </Button>
                  </Flex>
                </Box>

                {/* PayID Name */}
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    Registered Name
                  </Text>
                  <Flex justify="space-between" align="center">
                    <Text
                      color="whiteAlpha.900"
                      fontSize="lg"
                      fontWeight="medium"
                    >
                      {paymentDetails.payIdName}
                    </Text>
                    <Button
                      size="sm"
                      onClick={() =>
                        copyToClipboard(paymentDetails.payIdName, "Name")
                      }
                      leftIcon={
                        copiedField === "Name" ? <FaCheck /> : <FaCopy />
                      }
                      sx={{
                        background:
                          copiedField === "Name"
                            ? "green.500"
                            : "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        _hover: {
                          background:
                            copiedField === "Name"
                              ? "green.600"
                              : "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      {copiedField === "Name" ? "Copied!" : "Copy"}
                    </Button>
                  </Flex>
                </Box>

                <Divider borderColor="rgba(255, 255, 255, 0.1)" />

                {/* Payment Type */}
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    PayID Type
                  </Text>
                  <Text color="whiteAlpha.900" fontSize="md">
                    {paymentDetails.payIdType}
                  </Text>
                </Box>

                {/* Reference */}
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    Reference (Important)
                  </Text>
                  <Flex justify="space-between" align="center">
                    <Text
                      color="whiteAlpha.900"
                      fontSize="md"
                      fontFamily="mono"
                    >
                      {paymentDetails.reference}
                    </Text>
                    <Button
                      size="sm"
                      onClick={() =>
                        copyToClipboard(paymentDetails.reference, "Reference")
                      }
                      leftIcon={
                        copiedField === "Reference" ? <FaCheck /> : <FaCopy />
                      }
                      sx={{
                        background:
                          copiedField === "Reference"
                            ? "green.500"
                            : "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        _hover: {
                          background:
                            copiedField === "Reference"
                              ? "green.600"
                              : "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      {copiedField === "Reference" ? "Copied!" : "Copy"}
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            </Box>

            <Box>
              {/* <VStack spacing={3} align="stretch">
                <Text color="green.300" fontWeight="medium" fontSize="md">
                  🔒 Secure Payment
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm">
                  PayID is a secure payment method developed by Australian
                  banks. Your payment is protected by your bank's security
                  measures.
                </Text>
                <Text color="whiteAlpha.600" fontSize="xs" fontStyle="italic">
                  Payments are typically instant and confirmed immediately.
                </Text>
              </VStack> */}
            </Box>

            {/* Important Notes */}
            {/* <Box
              p={4}
              borderRadius="lg"
              sx={{
                background: "rgba(249, 115, 22, 0.1)",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <VStack spacing={2} align="start">
                <Text color="orange.300" fontWeight="medium" fontSize="sm">
                  ⚠️ Important Notes:
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm">
                  • Please complete your payment before proceeding
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm">
                  • Use the exact reference number provided
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm">
                  • Keep your payment confirmation for reference
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm">
                  • Your order will be processed after payment confirmation
                </Text>
              </VStack>
            </Box> */}

            {/* Contact Support */}
            <Box textAlign="center">
              <Text color="whiteAlpha.600" fontSize="sm">
                Need help with payment? Contact us via WhatsApp for immediate
                assistance.
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter
          borderTop="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          bg="rgba(15, 23, 42, 0.95)"
          position="sticky"
          bottom={0}
          zIndex={1}
          pt={4}
        >
          <HStack spacing={3} width="full">
            <Button
              flex={1}
              variant="outline"
              onClick={onClose}
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "whiteAlpha.800",
                _hover: {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Cancel Order
            </Button>
            <Button
              flex={2}
              colorScheme="green"
              size="md"
              onClick={handlePaymentComplete}
              sx={{
                background: "rgba(80, 140, 2, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                fontWeight: "bold",
                _hover: {
                  background: "rgba(111, 195, 1, 0.8)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(50, 88, 0, 0.8)",
                },
              }}
            >
              I Have Paid ✓
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
