import React, {   } from "react";
import { YStack} from "tamagui";
import { Image} from 'tamagui';
import { Link } from 'expo-router';

export default function InfoImg () {
    return (
        <YStack>
            <Image 
            source={require('./Info.png')}
            style={{
                width: '100%', 
                height: '100%'
            }}/> 
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