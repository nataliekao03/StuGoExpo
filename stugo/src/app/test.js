// Import the functions you need from the SDKs you need
// import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export function writeUsers() {
  db.collection("test/test5")
    .add({
      first: "Uyen",
      last: "H",
      born: 2023,
    })
    .then((docRef) => {
      console.log("Document written: ", docRef);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
// const addUser = doc(db, "test/test5");
// function writeUsers() {
//   const docRef = {
//     first: "Uyen",
//     last: "Hoang",
//     born: 2003,
//   };
//   setDoc(addUser, docRef);
// }
// export { writeUsers };

//Detect auth state
