import React from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { YStack } from "tamagui";
import { Image } from "tamagui";
import { useRouter } from "expo-router"; // Import the useRouter hook

export default function OpeningImg() {
  const router = useRouter(); // Initialize the useRouter hook
  const handleImagePress = () => {
    // Navigate to the next screen when image is clicked
    router.push("/Intro");
  };

  return (
    <TouchableWithoutFeedback onPress={handleImagePress}>
      <YStack>
        <Image
          source={require("../../../assets/openingImg.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </YStack>
    </TouchableWithoutFeedback>
  );
}
