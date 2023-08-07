import { Link, Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
import React from "react";

const Tab1Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, title: "Explore" }} />
      <Link href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link>
    </View>
  );
};
export default Tab1Index;
