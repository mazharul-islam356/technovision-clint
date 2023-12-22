// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiWTbZ50CZ3HCsRjM9c_hAcfu15wo94uc",
  authDomain: "email-auth-de977.firebaseapp.com",
  projectId: "email-auth-de977",
  storageBucket: "email-auth-de977.appspot.com",
  messagingSenderId: "143414871004",
  appId: "1:143414871004:web:3e6b458956184b3f2a0519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);