import { Theme } from "@/styles/theme";
import {
  backgroundColor,
  BackgroundColorProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from "@shopify/restyle";
import { TextInput, TextInputProps } from "react-native";

type ThemedTextInputProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  TextInputProps;

export const ThemedTextInput = createRestyleComponent<
  ThemedTextInputProps,
  Theme
>([backgroundColor, spacing, layout, spacingShorthand], TextInput);

export type { ThemedTextInputProps };
