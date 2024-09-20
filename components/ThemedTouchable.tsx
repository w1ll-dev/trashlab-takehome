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
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ThemedTouchableProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const ThemedTouchable = createRestyleComponent<
  ThemedTouchableProps,
  Theme
>([backgroundColor, spacing, layout, spacingShorthand], TouchableOpacity);
