// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1sxL6tF-ALyZsD1WSK8XxfXhrF61crP0",
  authDomain: "restaurant-c9.firebaseapp.com",
  projectId: "restaurant-c9",
  storageBucket: "restaurant-c9.appspot.com",
  messagingSenderId: "952590778579",
  appId: "1:952590778579:web:c72fccdd8e914f9f4c5426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Servicios que estoy ocupando

export const db = getFirestore(app) // Recibe el firebase inicializado // Firestore