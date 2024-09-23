import { Spacer, ThemedText, ThemedView } from "@/components/shared";
import { useMemo } from "react";
import { getMessageBorderRadius, MESSAGE_CONTAINER_MAX_WIDTH } from "./utils";
import { Message } from "@/types/message";
import { getMessageDate } from "@/utils";
import { CircleAvatar } from "@/components/home";

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
    () => (isFromCurrentUser ? "flex-end" : "flex-start"),
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
      <ThemedView alignSelf={messageAlign} alignItems={messageAlign}>
        <CircleAvatar avatarURL={profileURL} size="mini" />
        <ThemedText variant="s" textAlign={"left"}>
          {messageTime}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
