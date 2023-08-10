import React from "react";
import { YStack, Button, Image } from "tamagui";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { useRouter, Link } from "expo-router";
import Info from "./Info";

export default function WelcomeImg() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <YStack>
      <Image
        source={require("./welcomePage3.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <Link
        href={"/Info"}
        style={{
          position: "absolute",
          bottom: 57,
          left: 17,
          alignSelf: "flex-end",
          width: 83,
          height: 36,
          backgroundColor: "red", //change later
        }}
      ></Link>
    </YStack>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: 350,
    height: 52,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
});
