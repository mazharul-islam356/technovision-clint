

// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2caSXpVSOJg8rMISJXANVEJCvWqMZmI",
  authDomain: "technovision-b47c0.firebaseapp.com",
  projectId: "technovision-b47c0",
  storageBucket: "technovision-b47c0.appspot.com",
  messagingSenderId: "322667422844",
  appId: "1:322667422844:web:a7bdb84d9f396a14e215f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);