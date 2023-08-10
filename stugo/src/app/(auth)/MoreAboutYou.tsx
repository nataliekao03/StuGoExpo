import React from "react";
import { YStack, TextArea } from "tamagui";
import { Image } from "tamagui";
import { Link } from "expo-router";
import { TextInput, StyleSheet } from "react-native";

export default function MoreAboutYou() {
  return (
    <YStack>
      <Image
        source={require("../../../assets/MoreInfo.png")}
        style={{
          width: "100%",
          height: "100%",
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
      >
        <TextInput placeholder="Preferred Name" style={styles.textInput} />
        <TextInput placeholder="School" style={styles.textInput} />
        <TextInput placeholder="Gender" style={styles.textInput} />
        <TextInput placeholder="Pronouns" style={styles.textInput} />
        <TextInput placeholder="Phone Number" style={styles.textInput} />
      </YStack>
      <Link
        href={"/RoleAssignment"}
        style={{
          position: "absolute",
          bottom: 57,
          right: 12,
          alignSelf: "flex-end",
          width: 80,
          height: 36,
          backgroundColor: "red",
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

// View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Stack.Screen
//         options={{ title: "Create Account", headerLeft: () => <></> }}
//       />
//       <Image
//         source={require("../../../assets/MoreInfo.png")}
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       />
//       <YStack
//         style={{
//           position: "absolute",
//           alignItems: "center",
//           padding: 5,
//           justifyItems: "space-between",
//           width: "100%",
//           top: "25%",
//         }}
//       ></YStack>
//       <TextArea
//         placeholder="Email"
//         onChangeText={(text) => {
//           emailRef.current = text;
//         }}
//         style={{
//           padding: 3,
//           marginBottom: 15,
//           width: "90%",
//           borderColor: "black",
//         }}
//       />
//       <TextArea
//         placeholder="First Name"
//         onChangeText={(text) => {
//           firstNameRef.current = text;
//         }}
//         style={{
//           padding: "$3",
//           marginBottom: 15,
//           width: "90%",
//           borderColor: "black",
//         }}
//       />
//       <TextArea
//         placeholder="Last Name"
//         onChangeText={(text) => {
//           lastNameRef.current = text;
//         }}
//         style={{
//           padding: "$3",
//           marginBottom: 15,
//           width: "90%",
//           borderColor: "black",
//         }}
//       />

//       <View>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           placeholder="email"
//           nativeID="email"
//           onChangeText={(text) => {
//             emailRef.current = text;
//           }}
//           style={styles.textInput}
//         />
//       </View>
//       <View>
//         <Text style={styles.label}>First Name</Text>
//         <TextInput
//           placeholder="firstName"
//           nativeID="firstName"
//           onChangeText={(text) => {
//             firstNameRef.current = text;
//           }}
//           style={styles.textInput}
//         />
//       </View>
//       <View>
//         <Text style={styles.label}>Last Name</Text>
//         <TextInput
//           placeholder="lastName"
//           nativeID="lastName"
//           onChangeText={(text) => {
//             lastNameRef.current = text;
//           }}
//           style={styles.textInput}
//         />
//       </View>
//       <View>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           placeholder="password"
//           secureTextEntry={true}
//           nativeID="password"
//           onChangeText={(text) => {
//             passwordRef.current = text;
//           }}
//           style={styles.textInput}
//         />
//       </View>

//       <Text
//         style={{ marginBottom: 8 }}
//         onPress={async () => {
//           const resp = await appSignUp(
//             emailRef.current,
//             passwordRef.current,
//             firstNameRef.current + " " + lastNameRef.current,
//           );
//           if (resp?.user) {
//             router.replace("/(tabs)/home");
//           } else {
//             console.log(resp.error);
//             Alert.alert("Sign Up Error", resp.error?.message);
//           }
//         }}
//       >
//         CREATE NEW USER
//       </Text>

//       <Text
//         onPress={() => {
//           AuthStore.update((s) => {
//             s.isLoggedIn = false;
//           });
//           router.back();
//         }}
//       >
//         CANCEL
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   label: {
//     marginBottom: 4,
//     color: "#455fff",
//   },
//   textInput: {
//     width: 250,
//     borderWidth: 1,
//     borderRadius: 4,
//     borderColor: "#455fff",
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     marginBottom: 8,
//   },
// });
