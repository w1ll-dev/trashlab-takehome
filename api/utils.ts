import { mockUsers } from "@/scripts/mockUsers";

/**
 * This is a mock for the current user ID, after implementing user creation
 * this mock will be not more necessary
 */
const CURRENT_USER_ID = mockUsers[0].userID;

enum QueryKeys {
  getUsers = "GET_USERS",
  getUserInfo = "GET_USER_INFO",
}

export { QueryKeys, CURRENT_USER_ID };
