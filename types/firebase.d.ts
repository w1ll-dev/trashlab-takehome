import {
  DocumentData,
  QuerySnapshot,
  CollectionReference,
} from "firebase/firestore";

type FirebaseSnapshot = QuerySnapshot<DocumentData, DocumentData>;
type FirebaseCollectionRef = CollectionReference<DocumentData, DocumentData>;
