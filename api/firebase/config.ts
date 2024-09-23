// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc } from "firebase/firestore";
import { env } from "../env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const chatRoomsRef = collection(database, "chatRooms");

const usersRef = collection(database, "users");

const getChatRoomDocByID = (chatRoomID: string) =>
  doc(database, "chatRooms", chatRoomID);

const getMessagesCollectionByChatRoomID = (chatRoomID: string) => {
  const chatRoomDoc = getChatRoomDocByID(chatRoomID);
  return collection(chatRoomDoc, "messages");
};

export {
  chatRoomsRef,
  usersRef,
  getChatRoomDocByID,
  getMessagesCollectionByChatRoomID,
};
