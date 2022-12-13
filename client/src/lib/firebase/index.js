// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndR5vf7nacuU9Fo3T2t9nia6Fk6HR2gA",
  authDomain: "tcheckup-7dae4.firebaseapp.com",
  projectId: "tcheckup-7dae4",
  storageBucket: "tcheckup-7dae4.appspot.com",
  messagingSenderId: "48184173435",
  appId: "1:48184173435:web:02b2b333a0ca3d530053de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
