import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg004-7rOqQF5MqdP1_E_UaW6i-HUcmBU",
  authDomain: "stugo-app-93b16.firebaseapp.com",
  projectId: "stugo-app-93b16",
  storageBucket: "stugo-app-93b16.appspot.com",
  messagingSenderId: "41104246347",
  appId: "1:41104246347:web:8cf6c046f81c2b28cdefce",
  measurementId: "G-G66KTQ02CK",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const addUser = doc(db, "test/HelloWorld");

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Button icon={<Home />} onTouchEnd={something}>
        Hello world
      </Button>
    </YStack>
  );
};