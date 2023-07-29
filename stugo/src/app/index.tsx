import { Stack } from "expo-router";
import { Input, Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import { replace_text, something } from "./test";

export default () => {
  var message = "";
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Input
        id="message"
        componentName="text_box"
        size="$4"
        borderWidth={2}
        placeholder=" Input Some Text"
        onChange={(Text) => replace_text}
      ></Input>
      <Button icon={<Home />} onTouchEnd={() => something}>
        Hello world
      </Button>
    </YStack>
  );
};
