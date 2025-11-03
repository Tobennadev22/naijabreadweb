// "use client";

// import { Grid, GridItem, Heading, Container } from "@chakra-ui/react";
// import { ProductCard } from "./productcard";

// export function ProductGrid({ products }) {
//   return (
//     <Container maxW="container.xl" py={12}>
//       <Heading mb={8} textAlign="center" color="white" fontFamily="poppins">
//         Our Fresh Breads
//       </Heading>

//       <Grid
//         templateColumns={{
//           base: "repeat(1, 1fr)",
//           md: "repeat(2, 1fr)",
//           lg: "repeat(3, 1fr)",
//         }}
//         gap={8}
//       >
//         {products.map((product) => (
//           <GridItem key={product.id}>
//             <ProductCard product={product} />
//           </GridItem>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ProductGrid;

"use client";

import { Grid, GridItem, Heading, Container, Box } from "@chakra-ui/react";
import { ProductCard } from "./productcard";

export function ProductGrid({ products }) {
  return (
    <Container maxW="container.xl" py={12}>
      <Box textAlign="center" mb={12}>
        <Heading size="xl" mb={3} color="whiteAlpha.900" fontWeight="bold">
          Our Fresh Breads
        </Heading>
        <Box
          width="100px"
          height="3px"
          bg="linear-gradient(90deg, transparent, orange.300, transparent)"
          mx="auto"
          borderRadius="full"
        />
      </Box>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGrid;
