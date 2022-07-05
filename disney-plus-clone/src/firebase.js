// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6J__CF7Ti1prk3848frW46ln6shXOuCw",
  authDomain: "disney-plus-65fb6.firebaseapp.com",
  projectId: "disney-plus-65fb6",
  storageBucket: "disney-plus-65fb6.appspot.com",
  messagingSenderId: "585524635521",
  appId: "1:585524635521:web:e708f5d075e67db830ea80",
  measurementId: "G-BP260EQ429"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;