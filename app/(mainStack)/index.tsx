import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView flex={1} justifyContent="center" alignItems="center">
      <ThemedText>Hello TrashLab</ThemedText>
    </ThemedView>
  );
}
