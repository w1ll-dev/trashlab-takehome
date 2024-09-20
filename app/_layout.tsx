import { AppProvider } from "@/components/shared";
import { Stack } from "expo-router";
import React from "react";

export default function MainStackLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AppProvider>
  );
}
