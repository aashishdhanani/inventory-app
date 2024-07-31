// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3qblMdxwTyn6DiXgT_zN40TpmFJH--k",
  authDomain: "inventory-management-132bd.firebaseapp.com",
  projectId: "inventory-management-132bd",
  storageBucket: "inventory-management-132bd.appspot.com",
  messagingSenderId: "182097516962",
  appId: "1:182097516962:web:2d3eb58f17ac9004bd3afb",
  measurementId: "G-9XS128VQ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}