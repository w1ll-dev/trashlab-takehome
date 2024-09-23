import { Theme } from "@/styles/theme";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { router } from "expo-router";
import { CircleAvatar } from "../home";
import { Spacer, ThemedText, ThemedView } from "../shared";

type ChatHeaderProps = {
  userToChatProfileURL: string;
  userToChatName: string;
};

export function ChatHeader({
  userToChatName,
  userToChatProfileURL,
}: ChatHeaderProps) {
  const theme = useTheme<Theme>();

  return (
    <ThemedView
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="s"
      paddingBottom="m"
      alignItems="center"
    >
      <ThemedView flexDirection="row" alignContent="center">
        <Entypo
          name="chevron-left"
          size={25}
          onPress={router.back}
          color={theme.colors.textColor}
        />
        <Spacer horizontal="m" />
        <ThemedText variant="p1">{userToChatName}</ThemedText>
      </ThemedView>
      <CircleAvatar avatarURL={userToChatProfileURL} />
    </ThemedView>
  );
}
