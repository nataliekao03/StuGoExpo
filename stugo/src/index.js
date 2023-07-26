// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg004-7rOqQF5MqdP1_E_UaW6i-HUcmBU",
  authDomain: "stugo-app-93b16.firebaseapp.com",
  projectId: "stugo-app-93b16",
  storageBucket: "stugo-app-93b16.appspot.com",
  messagingSenderId: "41104246347",
  appId: "1:41104246347:web:8cf6c046f81c2b28cdefce",
  measurementId: "G-G66KTQ02CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(firebaseConfig);

//Detect auth state
