import { mockUsers } from "./mockUsers";
import { firebaseLogger } from "../utils";
import admin from "firebase-admin";
const serviceAccount = require("../../api/firebase/firebase-service-account-key.json"); // Update the path

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore instance
const db = admin.firestore();

async function uploadUsers() {
  try {
    for (const item of mockUsers) {
      const userID = item.userID;
      if (!userID) {
        firebaseLogger.error(`Item is missing userID: ${item}`);
        continue; // Skip this item if userID is not present
      }
      const docRef = db.collection("users").doc(userID);
      const itemData = { ...item, userID: docRef.id };
      await docRef.set(itemData); // Upload the item data
      firebaseLogger.log(`User document written with ID: ${docRef.id}`);
    }
  } catch (error) {
    console.error("Error uploading document: ", error);
  }
}

uploadUsers();
