import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";

function something() {
  console.log("hello World");
}

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
