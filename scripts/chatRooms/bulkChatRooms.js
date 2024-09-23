const { mockChatRooms } = require("./mockChatRooms");
const { firebaseLogger } = require("../utils");
const admin = require("firebase-admin");
const serviceAccount = require("../../api/firebase/firebase-service-account-key.json"); // Update the path

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore instance
const db = admin.firestore();

/**
 * Upload JSON data to Firestore.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {object} jsonData - The JSON data to upload.
 */
async function uploadChatRooms(collectionName, listData) {
  try {
    for (const item of listData) {
      const chatRoomID = item.chatRoomID;

      if (!chatRoomID) {
        firebaseLogger.error("Item is missing userID:", item);
        continue; // Skip this item if userID is not present
      }
      const chatRoomDocRef = db.collection(collectionName).doc(chatRoomID);
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
    console.error("Error uploading document: ", error);
  }
}

uploadChatRooms("chatRooms", mockChatRooms);
