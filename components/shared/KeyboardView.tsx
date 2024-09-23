import { IS_IOS } from "@/utils";
import { ThemedKeyboardAvoidingView } from "./ThemedKeyboardAvoidingView";

type KeyboardViewProps = {
  children: React.ReactNode;
};

export function KeyboardView({ children }: KeyboardViewProps) {
  const keyboardBehavior = IS_IOS ? "padding" : undefined;

  return (
    <ThemedKeyboardAvoidingView behavior={keyboardBehavior}>
      {children}
    </ThemedKeyboardAvoidingView>
  );
}
