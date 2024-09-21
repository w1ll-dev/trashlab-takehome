import { FontName } from "@/assets/fonts/fontName";
import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    h1: {
      fontFamily: FontName["Manrope-Bold"],
      fontSize: 48,
    },
    h2: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 44,
    },
    h3: {
      fontFamily: FontName["Manrope-Bold"],
      fontSize: 32,
    },
    h4: {
      fontFamily: FontName["Manrope-Bold"],
      fontSize: 28,
    },
    p1: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 16,
    },
    p2: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 12,
    },
    defaults: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 12,
    },
  },
});

export type Theme = typeof theme;
export default theme;
