import { mockChatRooms } from "./mock";
import { firebaseLogger } from "../utils";
import admin from "firebase-admin";
const serviceAccount = require("../../api/firebase/firebase-service-account-key.json"); // Update the path

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore instance
const db = admin.firestore();

async function uploadChatRooms() {
  try {
    for (const item of mockChatRooms) {
      const chatRoomID = item.chatRoomID;

      if (!chatRoomID) {
        firebaseLogger.error(`Item is missing userID: ${item}`);
        continue; // Skip this item if userID is not present
      }
      const chatRoomDocRef = db.collection("chatRooms").doc(chatRoomID);
      const chatRoomItem = {
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
        chatRoomID: chatRoomDocRef.id,
      };
      await chatRoomDocRef.set(chatRoomItem); // Upload the item data

      firebaseLogger.log(
        `ChatRoom document written with ID: ${chatRoomDocRef.id}`,
      );

      for (const messageItem of item.messages) {
        const messageDocRef = chatRoomDocRef.collection("messages").doc();
        const message = {
          ...messageItem,
          createdAt: admin.firestore.Timestamp.fromDate(new Date()),
        };
        await messageDocRef.set(message); // Upload the item data
        firebaseLogger.log(
          `Message document written with ID: ${messageDocRef.id}`,
        );
      }
    }
  } catch (error) {
    firebaseLogger.error(error);
  }
}

uploadChatRooms();
