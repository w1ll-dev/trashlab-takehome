import { where } from "firebase/firestore";
import { getDocsAdapter } from "../adapters/requestAdapter";
import { usersRef } from "../firebase/config";
import { CURRENT_USER_ID } from "../utils";
import { getUserInfoMapper } from "../mappers";
import { errorGettingUserInfo } from "../errors";

export const getUserInfo = async () => {
  const userInfo = await getDocsAdapter(
    usersRef,
    getUserInfoMapper,
    where("userID", "==", CURRENT_USER_ID),
  );

  if (!userInfo.name) {
    throw errorGettingUserInfo;
  }

  return userInfo;
};
