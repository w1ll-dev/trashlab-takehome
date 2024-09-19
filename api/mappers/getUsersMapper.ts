import { FirebaseSnapshot } from "@/types/firebase";

export const getUsersMapper = (querySnapshot: FirebaseSnapshot) => {
  const usersList: User[] = [];

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    usersList.push({
      name: userData.name,
      profileURL: userData.profileURL,
      userID: userData.userID,
    });
  });

  return usersList;
};
