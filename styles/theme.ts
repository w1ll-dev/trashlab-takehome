import { FontName } from "@/assets/fonts/fontName";
import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#07091A",

  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    screenBackground: palette.purpleDark,
    messageBackground: palette.purplePrimary,
    textColor: palette.white,
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
      fontSize: 32,
      color: "textColor",
    },
    h2: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 28,
      color: "textColor",
    },
    h3: {
      fontFamily: FontName["Manrope-Bold"],
      fontSize: 24,
      color: "textColor",
    },
    h4: {
      fontFamily: FontName["Manrope-Bold"],
      fontSize: 20,
      color: "textColor",
    },
    p1: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 20,
      color: "textColor",
    },
    p2: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 16,
      color: "textColor",
    },
    s: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 12,
      color: "textColor",
    },
    defaults: {
      fontFamily: FontName["Manrope-Regular"],
      fontSize: 12,
      color: "textColor",
    },
  },
});

export type Theme = typeof theme;
export default theme;
