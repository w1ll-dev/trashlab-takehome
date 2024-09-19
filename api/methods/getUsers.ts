import { requestAdapter } from "../adapters/requestAdapter";
import { usersRef } from "../firebase/config";
import { getUsersMapper } from "../mappers/getUsersMapper";

export const getUsers = () => {
  const usersList = requestAdapter(usersRef, getUsersMapper);

  return usersList;
};
