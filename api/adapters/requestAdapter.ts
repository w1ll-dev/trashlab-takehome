import { FirebaseCollectionRef, FirebaseSnapshot } from "@/types/firebase";
import { getDocs, query } from "firebase/firestore";

export const requestAdapter = async <T>(
  collectionRef: FirebaseCollectionRef,
  mapperMethod: (querySnapshot: FirebaseSnapshot) => T,
): Promise<T> => {
  const collectionQuery = query(collectionRef);

  const querySnapshot = await getDocs(collectionQuery);

  const dataToReturn = mapperMethod(querySnapshot);

  return dataToReturn;
};
