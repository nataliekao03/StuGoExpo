import React, {   } from "react";
import { YStack, Checkbox, XStack, Label} from "tamagui";
import { Check as CheckIcon } from '@tamagui/lucide-icons'
import { Image} from 'tamagui';
import { Link } from 'expo-router';

export default function RoleAssignment () {
    return (
        <YStack>
            <Image 
            source={require('../../../assets/Role.png')}
            style={{
                width: '100%', 
                height: '100%'
            }}/> 
            <YStack 
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '20%',
                    alignItems: "right",
                    margin: '5%',
                    justifyContent: 'center'
                }} space="$4">
                <Checkbox size = {'$6'} defaultChecked = {false} borderColor={'black'}>
                    <Checkbox.Indicator>
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox>
            </YStack>
            <YStack 
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '34%',
                    alignItems: "right",
                    margin: '5%',
                    justifyContent: 'center'
                }} space="$4">
                <Checkbox size = {'$6'} defaultChecked = {false} borderColor={'black'}>
                    <Checkbox.Indicator>
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox>
            </YStack>
            <YStack 
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '48%',
                    alignItems: "right",
                    margin: '5%',
                    justifyContent: 'center'
                }} space="$4">
                <Checkbox size = {'$6'} defaultChecked = {false} borderColor={'black'}>
                    <Checkbox.Indicator>
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox>
            </YStack>
            <Link href={"/screens/ProfileSetUp"}
                style = {{
                    position: 'absolute',
                    bottom: 57,
                    right: 12,
                    alignSelf: "flex-end",
                    width: 80,
                    height: 36,
                    backgroundColor: 'red'
                }}>
            </Link>
        </YStack>
    );
}