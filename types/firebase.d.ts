import {
  DocumentData,
  QuerySnapshot,
  CollectionReference,
  DocumentReference,
} from "firebase/firestore";

type FirebaseSnapshot = QuerySnapshot<DocumentData, DocumentData>;
type FirebaseCollectionRef = CollectionReference<DocumentData, DocumentData>;
type FirebaseDocumentRef = DocumentReference<DocumentData, DocumentData>;
