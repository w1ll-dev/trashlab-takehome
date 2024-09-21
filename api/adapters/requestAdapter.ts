import { FirebaseCollectionRef, FirebaseSnapshot } from "@/types/firebase";
import { getDocs, query, QueryConstraint } from "firebase/firestore";

export const requestAdapter = async <T>(
  collectionRef: FirebaseCollectionRef,
  mapperMethod: (querySnapshot: FirebaseSnapshot) => T,
  ...queryConstraints: QueryConstraint[]
): Promise<T> => {
  const collectionQuery = query(collectionRef, ...queryConstraints);

  const querySnapshot = await getDocs(collectionQuery);

  const dataToReturn = mapperMethod(querySnapshot);

  return dataToReturn;
};
