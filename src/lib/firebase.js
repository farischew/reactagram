import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBGvwA4wgpufmatOudCutbK8swgmNdEcMk",
  authDomain: "reactagram3.firebaseapp.com",
  projectId: "reactagram3",
  storageBucket: "reactagram3.appspot.com",
  messagingSenderId: "679393111601",
  appId: "1:679393111601:web:3b9e148eebc306287a2f10",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
