import { Stack, Link, useRouter } from "expo-router";
import { Button, YStack, View, Text, Input} from "tamagui";
import { Home } from "@tamagui/lucide-icons";
import React, { useState  } from "react";
import { } from 'react-native';

export default function LoginButton (props) {
    const router = useRouter();
    const {role} = props
//need to store info as well
    return (
        <Button
            onPress= {() => router.replace("/screens/SignUp")}
            // href='screens/SignUp/index'
            style = {{
                width: "75%",
                height: '25%',
                alignSelf: "center",
                textAlign: 'center',
                fontSize: 15,
                paddingVertical: 0,
                justifyContent: 'center',
                backgroundColor: "#EBEBEB",
                marginVertical: 10 }}
        >{role}</Button>
    );
};