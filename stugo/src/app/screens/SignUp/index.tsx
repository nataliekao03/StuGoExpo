import { Link, Redirect, Stack } from "expo-router";
import { View } from "react-native";
import IntroImg from "./Intro";

const Tab1Index = () => {
  return (
    <View>
      <IntroImg></IntroImg>
      <Stack.Screen options={{ headerShown: true, title: "SignUp" }} />
    </View>
  );
};
export default Tab1Index;