import React, {   } from "react";
import { ImageBackground } from 'react-native';
import { YStack } from "tamagui";
//import openingImg from '../../../assets/openingImg.png';
import {Image} from 'tamagui';

export default function OpeningImg () {

    return (
        <YStack>
            <Image 
                source={require('../../../assets/openingImg.png')}
                style={{
                    width: '100%', 
                    height: '100%'
                }}/>
        </YStack>
        
    );
}