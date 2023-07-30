import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { loginWithEmailPassword } from "../auth/loginEmailPassword";
import { writeUsers } from "./test";
import { firebaseConfig } from "../firebaseConfig";

// const firebaseConfig = {
//   apiKey: "AIzaSyCg004-7rOqQF5MqdP1_E_UaW6i-HUcmBU",
//   authDomain: "stugo-app-93b16.firebaseapp.com",
//   databaseURL: "https://stugo-app-93b16-default-rtdb.firebaseio.com",
//   projectId: "stugo-app-93b16",
//   storageBucket: "stugo-app-93b16.appspot.com",
//   messagingSenderId: "41104246347",
//   appId: "1:41104246347:web:8cf6c046f81c2b28cdefce",
//   measurementId: "G-G66KTQ02CK",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

// const addUser = doc(db, "test/test5");
// function writeUsers() {
//   const docRef = {
//     first: "Anastasia",
//     last: "M",
//     born: 2002,
//   };
//   setDoc(addUser, docRef);
// }

function something() {
  console.log("Print statement");
  writeUsers();
}

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Button icon={<Home />} onPress={something}>
        Hello world
      </Button>
      <Stack.Screen options={{ title: "SignIn" }} />
      <Button icon={<Home />} onPress={loginWithEmailPassword}>
        Sign In
      </Button>
    </YStack>
  );
};
