import React from "react";
import { YStack } from "tamagui";
import { Image } from "tamagui";
import { Link } from "expo-router";

export default function InfoImg() {
  return (
    <YStack>
      <Image
        source={require("./Info.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Link //next button
        href={"/loginEmailPassword"}
        style={{
          position: "absolute",
          bottom: 57,
          right: 12,
          alignSelf: "flex-end",
          width: 80,
          height: 36,
          backgroundColor: "red", //change to transparent
        }}
      ></Link>
      <Link //back button
        href={"/Intro"}
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
