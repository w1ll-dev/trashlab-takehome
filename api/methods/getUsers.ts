import { where } from "firebase/firestore";
import { requestAdapter } from "../adapters/requestAdapter";
import { usersRef } from "../firebase/config";
import { getUsersMapper } from "../mappers";
import { CURRENT_USER_ID } from "../utils";

export const getUsers = () => {
  const usersList = requestAdapter(
    usersRef,
    getUsersMapper,
    where("userID", "!=", CURRENT_USER_ID),
  );

  return usersList;
};
