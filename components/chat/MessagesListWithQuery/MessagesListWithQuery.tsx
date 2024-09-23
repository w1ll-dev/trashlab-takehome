import { useMessages } from "@/hooks";
import { callErrorAlert } from "@/utils";
import { MessagesList } from "./MessagesList";

type MessagesListProps = {
  chatID: ChatRoom["chatRoomID"];
  receiverName: User["name"];
};

export function MessagesListWithQuery({
  chatID,
  receiverName,
}: MessagesListProps) {
  const { messages, error: errorGettingMessages } = useMessages(
    chatID,
    receiverName,
  );

  if (errorGettingMessages) {
    callErrorAlert(errorGettingMessages);
  }

  return <MessagesList messages={messages} />;
}
