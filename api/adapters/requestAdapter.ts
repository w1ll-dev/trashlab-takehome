import { FirebaseCollectionRef, FirebaseSnapshot } from "@/types/firebase";
import { getDocs, query, QueryConstraint } from "firebase/firestore";
import { errorGettingData } from "../errors";
import { firebaseLogger } from "@/scripts/utils";

export const getDocsAdapter = async <T>(
  collectionRef: FirebaseCollectionRef,
  mapperMethod: (querySnapshot: FirebaseSnapshot) => T,
  ...queryConstraints: QueryConstraint[]
): Promise<T> => {
  try {
    const collectionQuery = query(collectionRef, ...queryConstraints);

    const querySnapshot = await getDocs(collectionQuery);

    const dataToReturn = mapperMethod(querySnapshot);

    return dataToReturn;
  } catch (error) {
    firebaseLogger.error(error);
    throw errorGettingData;
  }
};
