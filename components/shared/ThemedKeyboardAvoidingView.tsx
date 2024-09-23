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
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from "react-native";

type ThemedTouchableProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  KeyboardAvoidingViewProps;

export const ThemedKeyboardAvoidingView = createRestyleComponent<
  ThemedTouchableProps,
  Theme
>([backgroundColor, spacing, layout, spacingShorthand], KeyboardAvoidingView);
