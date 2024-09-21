import { where } from "firebase/firestore";
import { requestAdapter } from "../adapters/requestAdapter";
import { usersRef } from "../firebase/config";
import { CURRENT_USER_ID } from "../utils";
import { getUserInfoMapper } from "../mappers";

export const getUserInfo = () => {
  const userInfo = requestAdapter(
    usersRef,
    getUserInfoMapper,
    where("userID", "==", CURRENT_USER_ID),
  );

  return userInfo;
};
