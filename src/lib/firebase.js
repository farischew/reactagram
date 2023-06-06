import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCTQVvqpB5xeBtqkRetoNkJlXvE9rKCQ2g",
  authDomain: "reactagram-de198.firebaseapp.com",
  projectId: "reactagram-de198",
  storageBucket: "reactagram-de198.appspot.com",
  messagingSenderId: "481852562848",
  appId: "1:481852562848:web:c6498285b4ae59800958c5",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
