import React, {   } from "react";
import { YStack, Button, Text } from "tamagui";
import { Image} from 'tamagui';
import { Link, useRouter, Stack, router } from 'expo-router';
import { Router } from "expo-router/build/types";
// import { Screen}
// import { Stack } from "expo-router";
// import { Router, Screen } from '@expo/router';
import ProfileSetUpPage  from "../ProfileSetUp";

export default function IntroImg () {
    //const router = useRouter();
    return (
        <YStack>
            <Image 
            source={require('./intro.png')}
            style={{
                width: '100%', 
                height: '100%'
            }}/> 
            <Link href={"./Info"}
                style = {{
                    position: 'absolute',
                    bottom: 57,
                    right: 12,
                    alignSelf: "flex-end",
                    width: 80,
                    height: 36,
                    backgroundColor: 'red'
                }}>
                {/* <Button
                    style={{
                    position: 'absolute',
                    bottom: 65,
                    right: 12,
                    alignSelf: "flex-end",
                    width: 80,
                    height: 36,
                    backgroundColor: 'transparent',
                }}></Button>  */}
            </Link>
        </YStack>
        
    );
}