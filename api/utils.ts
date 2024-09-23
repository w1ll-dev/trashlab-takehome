import { mockUsers } from "@/scripts/users/mockUsers";

/**
 * This is a mock for the current user ID, after implementing user creation
 * this mock will be not more necessary
 */
const CURRENT_USER_ID = mockUsers[0].userID;

enum QueryKeys {
  getUsers = "GET_USERS",
  getUserInfo = "GET_USER_INFO",
  sendMessage = "SEND_MESSAGE",
}

export { QueryKeys, CURRENT_USER_ID };
