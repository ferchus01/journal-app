// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzZsIgHWJ_HO8I7TTjAb--7i-xI5Rl2jQ",
  authDomain: "react-curso-6423a.firebaseapp.com",
  projectId: "react-curso-6423a",
  storageBucket: "react-curso-6423a.appspot.com",
  messagingSenderId: "80934066634",
  appId: "1:80934066634:web:59b274baea06e2c18e1733",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
