import { where } from "firebase/firestore";
import { getDocsAdapter } from "../adapters/requestAdapter";
import { usersRef } from "../firebase/config";
import { getUsersMapper } from "../mappers";
import { CURRENT_USER_ID } from "../utils";
import { errorGettingUsers } from "../errors";

export const getUsers = async (): Promise<User[]> => {
  const usersList = await getDocsAdapter(
    usersRef,
    getUsersMapper,
    where("userID", "!=", CURRENT_USER_ID),
  );

  if (!usersList.length) {
    throw errorGettingUsers;
  }

  return usersList;
};
