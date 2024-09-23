import { Timestamp } from "firebase/firestore";

type Message = {
  userID: User["userID"];
  text: string;
  profileURL: User["profileURL"];
  senderName: User["name"];
  createdAt: Timestamp;
};
