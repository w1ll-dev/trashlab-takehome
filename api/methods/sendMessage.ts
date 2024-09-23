import { Message } from "@/types/message";
import { addDoc, setDoc, Timestamp } from "firebase/firestore";
import { errorSendingMessage } from "../errors";
import {
  getChatRoomDocByID,
  getMessagesCollectionByChatRoomID,
} from "../firebase/config";
import { sanitizeMessage } from "@/utils";

const getTimestamp = () => Timestamp.fromDate(new Date());

const createChatRoomIfNotExists = async ({
  chatRoomID,
  senderUser,
}: Omit<SendMessageParams, "messageText">) => {
  try {
    const chatRoomDocument = getChatRoomDocByID(chatRoomID);

    const newChatRoom: ChatRoom = {
      chatRoomID,
      createdAt: getTimestamp(),
    };

    setDoc(chatRoomDocument, newChatRoom);
  } catch {
    return errorSendingMessage(senderUser.name);
  }
};

type SendMessageParams = {
  messageText: string;
  chatRoomID: string;
  senderUser: User;
};

export const sendMessage = async ({
  chatRoomID,
  messageText,
  senderUser,
}: SendMessageParams) => {
  const createChatResult = await createChatRoomIfNotExists({
    chatRoomID,
    senderUser,
  });

  if (createChatResult?.title) throw errorSendingMessage(senderUser.name);

  const messagesRef = getMessagesCollectionByChatRoomID(chatRoomID);

  const newMessage: Message = {
    createdAt: getTimestamp(),
    profileURL: senderUser.profileURL,
    senderName: senderUser.name,
    text: sanitizeMessage(messageText),
    userID: senderUser.userID,
  };

  const newMessageDoc = await addDoc(messagesRef, newMessage);

  if (!newMessageDoc?.id) throw errorSendingMessage(senderUser.name);

  return newMessageDoc.id;
};
