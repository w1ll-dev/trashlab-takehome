import { Stack } from "expo-router";
import React from "react";

export default function MainStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
