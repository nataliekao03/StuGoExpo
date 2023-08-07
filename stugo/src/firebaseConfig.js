// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg004-7rOqQF5MqdP1_E_UaW6i-HUcmBU",
  authDomain: "stugo-app-93b16.firebaseapp.com",
  databaseURL: "https://stugo-app-93b16-default-rtdb.firebaseio.com",
  projectId: "stugo-app-93b16",
  storageBucket: "stugo-app-93b16.appspot.com",
  messagingSenderId: "41104246347",
  appId: "1:41104246347:web:8cf6c046f81c2b28cdefce",
  measurementId: "G-G66KTQ02CK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistance: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth, app };

//Detect auth state

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Firestore
// export const db = firebase.firestore();
