// import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   colors: {
//     brand: {
//       50: "#fff7ed",
//       100: "#ffedd5",
//       200: "#fed7aa",
//       300: "#fdba74",
//       400: "#fb923c",
//       500: "#f97316",
//       600: "#ea580c",
//       700: "#c2410c",
//       800: "#9a3412",
//       900: "#7c2d12",
//     },
//     neutral: {
//       50: "#fafafa",
//       100: "#f5f5f5",
//       200: "#e5e5e5",
//       300: "#d4d4d4",
//       400: "#a3a3a3",
//       500: "#737373",
//       600: "#525252",
//       700: "#404040",
//       800: "#262626",
//       900: "#171717",
//       950: "#0a0a0a",
//     },
//   },

//   fonts: {
//     heading: '"Georgia", serif',
//     body: '"Inter", sans-serif',
//   },
// });

// export default theme;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    dark: {
      50: "rgba(255, 255, 255, 0.05)",
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      400: "rgba(255, 255, 255, 0.4)",
      500: "rgba(255, 255, 255, 0.5)",
      600: "rgba(255, 255, 255, 0.6)",
      700: "rgba(255, 255, 255, 0.7)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 0.9)",
    },
  },
  fonts: {
    heading: '"Belanosima", serif',
    body: '"Inter", sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "orange",
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        backgroundAttachment: "fixed",
        color: "whiteAlpha.900",
        minHeight: "100vh",
      },
    }),
  },
});

export default theme;
