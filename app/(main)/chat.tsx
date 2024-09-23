import { sendMessage } from "@/api/methods";
import { CURRENT_USER_ID } from "@/api/utils";
import {
  ChatHeader,
  ChatInput,
  MessagesListWithQuery,
} from "@/components/chat";
import { ScreenContainer, Spacer } from "@/components/shared";
import { callErrorAlert, getChatID } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function ChatScreen() {
  const [textValue, setTextValue] = useState("");

  const user: User = useLocalSearchParams();
  const chatID = getChatID(CURRENT_USER_ID, user.userID);

  const { mutate, error: errorSendingMessage } = useMutation<
    string,
    CustomError,
    string
  >({
    mutationFn: (messageText: string) =>
      sendMessage({
        chatRoomID: chatID,
        senderUser: user,
        messageText,
      }),
  });

  const onSubmitForm = async () => {
    setTextValue("");

    mutate(textValue);

    if (errorSendingMessage) {
      callErrorAlert(errorSendingMessage, () => mutate(textValue));
    }
  };

  return (
    <ScreenContainer>
      <ChatHeader
        userToChatName={user.name}
        userToChatProfileURL={user.profileURL}
      />
      <MessagesListWithQuery chatID={chatID} receiverName={user.name} />
      <Spacer vertical="m" />
      <ChatInput
        value={textValue}
        onChangeText={setTextValue}
        onSubmit={onSubmitForm}
      />
    </ScreenContainer>
  );
}
