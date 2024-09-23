import admin from "firebase-admin";
import { getChatID } from "../../utils/chat";
import { mockUsers, CURRENT_USER } from "../users/mockUsers";
import { firebaseLogger } from "../utils";
import { mockMessage } from "./mock";
const serviceAccount = require("../../api/firebase/firebase-service-account-key.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore instance
const db = admin.firestore();

async function receiveMessageFromUser() {
  const [senderUserID] = process.argv.slice(2);

  if (!senderUserID)
    return firebaseLogger.error("Please, select a user id from mocks");

  const messageText = mockMessage.text;

  try {
    const senderUser = mockUsers.find(
      (user: any) => user.userID === senderUserID,
    );
    const chatRoomId = getChatID(CURRENT_USER.userID, senderUserID);
    const chatRoomDocRef = db.collection("chatRooms").doc(chatRoomId);
    const newMessageDocRef = chatRoomDocRef.collection("messages").doc();

    const newMessage = {
      profileURL: senderUser?.profileURL,
      senderName: senderUser?.name,
      text: messageText,
      userID: senderUserID,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };

    await newMessageDocRef.set(newMessage);

    firebaseLogger.log(
      `Message document written with ID: ${newMessageDocRef.id}`,
    );
  } catch (error) {
    firebaseLogger.error(error);
  }
}

receiveMessageFromUser();
