import { Stack, Link } from "expo-router";
import { Button, YStack, Text, XStack} from "tamagui";
import { Search, } from "@tamagui/lucide-icons";
import React, {   } from "react";
import { } from 'react-native';
import LoginButton from "../Componenets/LoginButtons";
import ProfileScreen from './ProfileSetUp';

export default function LoginPage () {

    return (

        <YStack flex={1} backgroundColor={"white"} >
            <YStack flex={2} alignItems="center" backgroundColor={'#EBEBEB'} justifyContent="center">
                    <Text fontSize={32} fontFamily={'$heading'}>Welcome to StuGo</Text>
                    <Text>Your Destination, Our Connection</Text>
            
            </YStack>

            <YStack flex = {1} alignItems="center" width="100%" justifyContent="space-evenly" marginVertical="$5">
                <Text alignSelf='center' justifyContent="center" marginVertical={10}>Sign up as an:</Text>
                <LoginButton role={'Instructor'}></LoginButton>
                <LoginButton role={'Student'}></LoginButton>
                <LoginButton role={'Parent'}></LoginButton>
            </YStack>

            <YStack flex={1} alignItems="center" justifyContent="flex-start" marginVertical="$5" space="$5">
                <Text>Sign in with:</Text>
                <XStack space="$2" justifyContent="center">
                    <Button alignSelf="center" icon={Search} size="$3"></Button>
                    <Button alignSelf="center" size="$3">SSO</Button>
                </XStack>
            </YStack>
            
        </YStack>

    );
  };