import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import LoginPage from "./login";
import ProfileSetUpPage from "./ProfileSetUp";
import OpeningImg from "./opening";
import IntroImg from "./Intro";
import InfoImg from "./Info";
import MoreAboutYou from "./MoreAboutYou";
import RoleAssignment from "./RoleAssignment";
import { View } from "react-native";
import { Link } from "expo-router";
import CreateAccount from "./create-account";

export default () => {
  return (
    <View style={{ position: "absolute", height: "100%", width: "100%" }}>
      {/* <OpeningImg></OpeningImg>
      <Link href='screens/login' style={{position:'absolute', height:'100%', width:'100%'}}></Link> */}
      <CreateAccount></CreateAccount>
    </View>
  );
};
