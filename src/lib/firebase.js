import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCvPNtiWmNR8fUzGIkM3MoAHka25JxV59k",
  authDomain: "reactagram2.firebaseapp.com",
  projectId: "reactagram2",
  storageBucket: "reactagram2.appspot.com",
  messagingSenderId: "602854085762",
  appId: "1:602854085762:web:2bdc433ec4471c5c62109b",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
