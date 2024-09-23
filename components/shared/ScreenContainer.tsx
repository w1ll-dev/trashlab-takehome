import { Theme } from "@/styles/theme";
import { BoxProps, useTheme } from "@shopify/restyle";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";

type ScreenContainerProps = {
  children: React.ReactNode;
} & BoxProps<Theme>;

export function ScreenContainer({
  children,
  ...boxProps
}: ScreenContainerProps) {
  const { colors } = useTheme<Theme>();

  return (
    <>
      <StatusBar
        backgroundColor={colors.screenBackground}
        barStyle="light-content"
      />
      <ThemedView {...boxProps} flex={1} backgroundColor="screenBackground">
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
