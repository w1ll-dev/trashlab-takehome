import { FirebaseSnapshot } from "@/types/firebase";

export const getUserInfoMapper = (querySnapshot: FirebaseSnapshot) => {
  const usersWithCurrentUserIDList: User[] = [];

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    usersWithCurrentUserIDList.push({
      name: userData.name,
      profileURL: userData.profileURL,
      userID: userData.userID,
    });
  });

  return usersWithCurrentUserIDList[0];
};
