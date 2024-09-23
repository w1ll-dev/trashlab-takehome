import { Spacer, ThemedText, ThemedView } from "@/components/shared";
import { useMemo } from "react";
import { getMessageBorderRadius, MESSAGE_CONTAINER_MAX_WIDTH } from "./utils";
import { Message } from "@/types/message";
import { getMessageDate } from "@/utils";

type MessageItemProps = Omit<Message, "senderName" | "userID"> & {
  isFromCurrentUser: boolean;
};

export function MessageItem({
  text,
  createdAt,
  profileURL,
  isFromCurrentUser,
}: MessageItemProps) {
  const messageAlign = useMemo(
    () => (isFromCurrentUser ? "flex-start" : "flex-end"),
    [isFromCurrentUser],
  );

  const messageBorderRadius = useMemo(
    () => getMessageBorderRadius(isFromCurrentUser),
    [isFromCurrentUser],
  );

  const messageTime = useMemo(
    () => getMessageDate(createdAt.seconds * 1000),
    [createdAt],
  );

  return (
    <ThemedView
      padding="s"
      alignSelf={messageAlign}
      marginHorizontal="s"
      backgroundColor="messageBackground"
      borderTopLeftRadius={messageBorderRadius.top}
      borderTopRightRadius={messageBorderRadius.top}
      borderBottomLeftRadius={messageBorderRadius.bottomLeft}
      borderBottomRightRadius={messageBorderRadius.bottomRight}
      maxWidth={MESSAGE_CONTAINER_MAX_WIDTH}
    >
      <ThemedText variant="p2">{text}</ThemedText>
      <Spacer horizontal="s" />
      <ThemedView alignSelf={messageAlign}>
        <ThemedText variant="s" textAlign={"left"}>
          {messageTime}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
