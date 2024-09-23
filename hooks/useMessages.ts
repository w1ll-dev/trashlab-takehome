import { errorSendingMessage } from "@/api/errors";
import { getMessagesCollectionByChatRoomID } from "@/api/firebase/config";
import { Message } from "@/types/message";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const getMessagesQuery = (chatRoomID: string) => {
  const messagesRef = getMessagesCollectionByChatRoomID(chatRoomID);
  const queryConstraints = [orderBy("createdAt", "desc"), limit(25)];

  const messagesQuery = query(messagesRef, ...queryConstraints);

  return messagesQuery;
};

export const useMessages = (
  chatRoomID: ChatRoom["chatRoomID"],
  receiverName: User["name"],
) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<CustomError | null>();

  useEffect(() => {
    try {
      const messagesQuery = getMessagesQuery(chatRoomID);

      let unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const allMessages = snapshot.docs.map((messageDocument) => {
          const messageData = messageDocument.data();

          return messageData as Message;
        });

        setMessages([...allMessages]);
      });

      return unsubscribe;
    } catch {
      setError(errorSendingMessage(receiverName));
    }
  }, [chatRoomID, receiverName]);

  return {
    messages,
    error,
  };
};
