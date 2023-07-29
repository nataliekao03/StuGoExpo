import { initializeApp } from "firebase/app";
import { getFireStore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg004-7rOqQF5MqdP1_E_UaW6i-HUcmBU",
  authDomain: "stugo-app-93b16.firebaseapp.com",
  projectId: "stugo-app-93b16",
  storageBucket: "stugo-app-93b16.appspot.com",
  messagingSenderId: "41104246347",
  appId: "1:41104246347:web:8cf6c046f81c2b28cdefce",
  measurementId: "G-G66KTQ02CK",
};

const db = getFireStore();

const addUser = doc(db, "test/HelloWorld");
function writeUsers() {
  const docRef = {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  };
  setDoc(addUser, docRef);
}
writeUsers();

console.log("Hello World");
