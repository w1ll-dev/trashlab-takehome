import { CURRENT_USER_ID as CURRENT_USER_ID_FROM_SCRIPTS } from "@/scripts/users/mockUsers";

/**
 * This is a mock for the current user ID, after implementing user creation
 * this mock will be not more necessary
 */
const CURRENT_USER_ID = CURRENT_USER_ID_FROM_SCRIPTS;

enum QueryKeys {
  getUsers = "GET_USERS",
  getUserInfo = "GET_USER_INFO",
  sendMessage = "SEND_MESSAGE",
}

export { QueryKeys, CURRENT_USER_ID };
