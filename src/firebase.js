// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from  "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMq1ONobUFalN2sX_byvEq5tH0EeP3pU",
  authDomain: "fravansat.firebaseapp.com",
  projectId: "fravansat",
  storageBucket: "fravansat.appspot.com",
  messagingSenderId: "807427520490",
  appId: "1:807427520490:web:412dd703b8ddb249d4e493",
  measurementId: "G-MV18KMHJ43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();