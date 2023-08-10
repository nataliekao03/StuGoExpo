import React from "react";
import { YStack, Button, Image } from "tamagui";
import { useRouter, Link } from "expo-router";
import Info from "./Info";

export default function IntroImg() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <YStack>
      <Image
        source={require("./intro.png")}
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
