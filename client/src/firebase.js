// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fastkar-auth.firebaseapp.com",
  projectId: "fastkar-auth",
  storageBucket: "fastkar-auth.appspot.com",
  messagingSenderId: "947511749713",
  appId: "1:947511749713:web:21f70b5d40e3a721a41c70",
  measurementId: "G-WCNXE9TLBK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
