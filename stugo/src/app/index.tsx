import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import LoginPage from "./screens/login";
import ProfileSetUpPage from "./screens/ProfileSetUp";
import OpeningImg from './screens/opening'
import IntroImg from "./screens/SignUp/Intro";
import InfoImg from "./screens/SignUp/Info";
import MoreAboutYou from "./screens/MoreAboutYou";
import RoleAssignment from "./screens/RoleAssignment";
import {View} from 'react-native';
import {Link} from 'expo-router';

export default () => {
  return (
    <View style={{position: 'absolute', height: '100%', width:'100%'}}> 
      {/* <OpeningImg></OpeningImg>
      <Link href='screens/login' style={{position:'absolute', height:'100%', width:'100%'}}></Link> */}
      <MoreAboutYou></MoreAboutYou>
    </View>
  );
};
