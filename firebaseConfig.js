// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tazama-3bc90.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting firebase auth and firestore

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;