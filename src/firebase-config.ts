// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAexxCOcAFApT9ijRi54rQCrU5uTW1hlXQ",
  authDomain: "nms-audit.firebaseapp.com",
  projectId: "nms-audit",
  storageBucket: "nms-audit.appspot.com",
  messagingSenderId: "1080537264881",
  appId: "1:1080537264881:web:dea8922433bc66828def50",
  measurementId: "G-X03BJ5L946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
