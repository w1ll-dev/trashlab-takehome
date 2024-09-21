const { mockUsers } = require("./mockUsers");
const { firebaseLogger } = require("./utils");
const admin = require("firebase-admin");
const serviceAccount = require("../api/firebase/firebase-service-account-key.json"); // Update the path

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
async function uploadListData(collectionName, listData) {
  try {
    for (const item of listData) {
      const userID = item.userID;
      if (!userID) {
        firebaseLogger.error("Item is missing userID:", item);
        continue; // Skip this item if userID is not present
      }
      const docRef = db.collection(collectionName).doc(userID);
      const itemData = { ...item, userID: docRef.id };
      await docRef.set(itemData); // Upload the item data
      firebaseLogger.log(`Document written with ID: ${docRef.id}`);
    }
  } catch (error) {
    console.error("Error uploading document: ", error);
  }
}

uploadListData("users", mockUsers);
