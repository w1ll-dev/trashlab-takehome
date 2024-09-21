import { ScreenContainer, ThemedText, ThemedView } from "@/components/shared";
import { useLocalSearchParams } from "expo-router";

export default function ChatScreen() {
  const { chatID } = useLocalSearchParams<RootStackParamsList["ChatScreen"]>();

  return (
    <ScreenContainer>
      <ThemedView flex={1} justifyContent="center" alignItems="center">
        <ThemedText variant="p1">{chatID}</ThemedText>
      </ThemedView>
    </ScreenContainer>
  );
}
