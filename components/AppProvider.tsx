import { FontName } from "@/assets/fonts/fontName";
import theme from "@/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

type AppProviderProps = {
  children: React.ReactNode;
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export function AppProvider({ children }: AppProviderProps) {
  const [loaded] = useFonts({
    [FontName["Manrope-Regular"]]: require(
      `../assets/fonts/files/Manrope-Regular.ttf`,
    ),
    [FontName["Manrope-Bold"]]: require(
      `../assets/fonts/files/Manrope-Bold.ttf`,
    ),
  });

  useEffect(() => {
    if (loaded!) return;

    SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
