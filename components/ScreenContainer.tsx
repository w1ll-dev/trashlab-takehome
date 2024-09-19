import { Theme } from "@/styles/theme";
import { BoxProps } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";

type ScreenContainerProps = {
  children: React.ReactNode;
} & BoxProps<Theme>;

export function ScreenContainer({
  children,
  ...boxProps
}: ScreenContainerProps) {
  return (
    <ThemedView {...boxProps} flex={1}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
