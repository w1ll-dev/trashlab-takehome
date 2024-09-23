import {
  Spacer,
  ThemedText,
  ThemedTouchable,
  ThemedView,
} from "@/components/shared";
import { CircleAvatar } from "../CircleAvatar";
import { useLastMessage } from "@/hooks";
import { getChatID, getMessageDate } from "@/utils";
import { CURRENT_USER_ID } from "@/api/utils";
import { useMemo } from "react";

type UserTileProps = User & {
  onPress: (userID: User["userID"]) => void;
};

export function UserTile({ name, profileURL, onPress, userID }: UserTileProps) {
  const chatID = getChatID(CURRENT_USER_ID, userID);
  const { lastMessage } = useLastMessage(chatID);

  const messageDate = useMemo(() => {
    if (!lastMessage?.createdAt?.seconds) return "";

    return getMessageDate(lastMessage?.createdAt?.seconds * 1_000);
  }, [lastMessage]);

  const lastMessageText = useMemo(
    () => lastMessage?.text.substring(0, 40),
    [lastMessage?.text],
  );

  return (
    <ThemedTouchable
      flexDirection="row"
      paddingHorizontal="m"
      onPress={() => onPress(userID)}
      justifyContent="space-between"
    >
      <ThemedView flexDirection="row" flex={1}>
        <CircleAvatar avatarURL={profileURL} />
        <Spacer horizontal="s" />
        <ThemedView>
          <ThemedText variant="p1">{name}</ThemedText>
          <ThemedText variant="s">{lastMessageText}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText>{messageDate}</ThemedText>
    </ThemedTouchable>
  );
}
