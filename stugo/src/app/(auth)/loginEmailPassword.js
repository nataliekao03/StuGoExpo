import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { AuthStore, appSignIn } from "../../store.js";
import { YStack, Button, Image } from "tamagui";
import { Stack, useRouter, Link } from "expo-router";
import { useRef } from "react";
import LoginButton from "../Componenets/LoginButtons";
import ProfileScreen from "./ProfileSetUp";
import OpeningImg from "./opening";
import { AlignCenter } from "@tamagui/lucide-icons";

export default function LogIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  //{{ flex: 1, justifyContent: "center", alignItems: "center" }}>

  return (
    <View style={{ position: "absolute", height: "100%", width: "100%" }}>
      <Image
        source={require("./welcomePage3.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <View style={{ marginTop: 365, marginBottom: -8 }}>
        {/* Adjust the marginTop and marginBottom values */}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          nativeID="email"
          onChangeText={(text) => {
            emailRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          nativeID="password"
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
          marginLeft: 10, // Add spacing between text elements
          marginRight: 10, // Add spacing between text elements
        }}
        onPress={async () => {
          const resp = await appSignIn(emailRef.current, passwordRef.current);
          if (resp?.user) {
            router.replace("/(tabs)/home");
          } else {
            console.log(resp.error);
            Alert.alert("Login Error", resp.error?.message);
          }
        }}
      >
        Login
      </Text>
      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
          marginLeft: 10, // Add spacing between text elements
          marginRight: 10, // Add spacing between text elements
        }}
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = true;
          });
          router.push("/create-account");
        }}
      >
        Create Account
      </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    //color: "#455fff",
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 70,
    marginBottom: 20,
  },
});
