// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// ref = reference to a "collection"
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPRLiagbEln6ilMM4xrInTFmo26iCXxE",
  authDomain: "rn-postingger-app.firebaseapp.com",
  projectId: "rn-postingger-app",
  storageBucket: "rn-postingger-app.appspot.com",
  messagingSenderId: "737023935220",
  appId: "1:737023935220:web:a3f1eae04622df30d914a1",
  measurementId: "G-3Z940FJQ3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  firebaseSet,
  firebaseDatabaseRef,
  sendEmailVerification,
  child,
  get,
  onValue, //reload when
};
