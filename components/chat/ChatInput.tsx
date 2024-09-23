import { Theme } from "@/styles/theme";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import {
  KeyboardView,
  Spacer,
  ThemedTextInput,
  ThemedTextInputProps,
  ThemedView,
} from "../shared";

type ChatInputProps = {
  onSubmit: (value: string) => void;
} & Omit<ThemedTextInputProps, "onSubmitEditing" | "onChange">;

const BORDER_RADIUS = 25;
const INPUT_HEIGHT = 50;

export function ChatInput({
  value,
  onChangeText,
  onSubmit,
  placeholder,
}: ChatInputProps) {
  const { textVariants, colors } = useTheme<Theme>();

  const onSubmitForm = () => {
    if (!value) return;

    onSubmit(value);
  };

  return (
    <KeyboardView>
      <ThemedView
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="m"
        borderWidth={1}
        borderRadius={BORDER_RADIUS}
        marginHorizontal="s"
        backgroundColor="textColor"
      >
        <ThemedTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          height={INPUT_HEIGHT}
          flexGrow={1}
          onSubmitEditing={onSubmitForm}
          autoFocus={true}
          flex={1}
        />
        <Feather
          name="send"
          size={textVariants.h2.fontSize}
          onPress={onSubmitForm}
          color={colors.screenBackground}
        />
      </ThemedView>
      <Spacer vertical="m" />
    </KeyboardView>
  );
}
