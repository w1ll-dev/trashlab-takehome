import { errorGettingLastMessage } from "@/api/errors";
import { getMessagesCollectionByChatRoomID } from "@/api/firebase/config";
import { Message } from "@/types/message";
import { callErrorAlert } from "@/utils";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const getLastMessagesQuery = (chatRoomID: string) => {
  const messagesRef = getMessagesCollectionByChatRoomID(chatRoomID);
  const queryConstraints = [orderBy("createdAt", "desc"), limit(1)];

  const lastMessageQuery = query(messagesRef, ...queryConstraints);

  return lastMessageQuery;
};

export const useLastMessage = (chatRoomID: ChatRoom["chatRoomID"]) => {
  const [lastMessage, setLastMessages] = useState<Message | null>(null);

  useEffect(() => {
    try {
      const lastMessageQuery = getLastMessagesQuery(chatRoomID);

      let unsubscribe = onSnapshot(lastMessageQuery, (snapshot) => {
        const [lastMessage] = snapshot.docs.map((messageDocument) => {
          const messageData = messageDocument.data();

          return messageData as Message;
        });

        setLastMessages(lastMessage);
      });

      return unsubscribe;
    } catch {
      callErrorAlert(errorGettingLastMessage);
    }
  }, [chatRoomID]);

  return {
    lastMessage,
  };
};
