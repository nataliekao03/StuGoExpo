// Import the functions you need from the SDKs you need
import { doc, setDoc } from "firebase/firestore";
import db from "../../firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const addUser = doc(db, "test/test5");
function writeUsers() {
  const docRef = {
    first: "Uyen",
    last: "Hoang",
    born: 2003,
  };
  setDoc(addUser, docRef);
}
export { writeUsers };

//Detect auth state
