import React, { useRef } from "react";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { AuthStore, appSignUp } from "../../store.js";
import { Stack, useRouter } from "expo-router";
import { YStack, TextArea, PasswordInput, Input } from "tamagui";
import { Image } from "tamagui";

export default function CreateAccount() {
  const router = useRouter();
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const passwordRef = useRef("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Stack.Screen
        options={{ title: "Create Account", headerLeft: () => <></> }}
      /> */}
      <Image
        source={require("./studentSignUp.png")}
        style={{
          width: "110%",
          height: "100%",
          position: "absolute",
        }}
      />
      <YStack
        style={{
          position: "absolute",
          alignItems: "center",
          padding: 5,
          justifyItems: "space-between",
          width: "100%",
          top: "25%",
        }}
      ></YStack>
      <TextInput
        placeholder="Email"
        nativeID="email"
        onChangeText={(text) => {
          emailRef.current = text;
        }}
        style={styles.textInput}
      />
      <TextInput
        placeholder="First Name"
        nativeID="firstName"
        onChangeText={(text) => {
          firstNameRef.current = text;
        }}
        style={styles.textInput}
      />
      <TextInput
        placeholder="First Name"
        nativeID="firstName"
        onChangeText={(text) => {
          firstNameRef.current = text;
        }}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        nativeID="password"
        onChangeText={(text) => {
          passwordRef.current = text;
        }}
        style={styles.textInput}
      />
      <Text
        style={{ marginBottom: 8 }}
        onPress={async () => {
          const resp = await appSignUp(
            emailRef.current,
            passwordRef.current,
            firstNameRef.current + " " + lastNameRef.current,
          );
          if (resp?.user) {
            router.replace("/MoreAboutYou");
          } else {
            console.log(resp.error);
            Alert.alert("Sign Up Error", resp.error?.message);
          }
        }}
      >
        CREATE NEW USER
      </Text>
      <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.back();
        }}
      >
        CANCEL
      </Text>
    </View>
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
