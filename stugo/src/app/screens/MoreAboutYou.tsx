import React, {   } from "react";
import { YStack, TextArea} from "tamagui";
import { Image} from 'tamagui';
import { Link } from 'expo-router';

export default function MoreAboutYou () {
    return (
        <YStack>
            <Image 
            source={require('../../../assets/MoreInfo.png')}
            style={{
                width: '100%', 
                height: '100%'
            }}/> 
            <YStack
                style = {{
                    position: 'absolute',
                    alignItems: "center",
                    padding: 5, 
                    justifyItems: 'space-between',
                    width: '100%',
                    top: '25%',
                }}>
            <TextArea placeholder="Preferred Name" 
                style = {{
                    padding: '$3',
                    marginBottom: 15,
                    width: '90%', 
                    borderColor: 'black'
                }}/>
            <TextArea placeholder="School" 
                style = {{
                    padding: '$3',
                    marginBottom: 15,
                    width: '90%',
                    borderColor: 'black'
            }}/>
            <TextArea placeholder="Gender" 
                style = {{
                    padding: '$3',
                    marginBottom: 15,
                    width: '90%',
                    borderColor: 'black'
            }}/>
            <TextArea placeholder="Pronouns" 
                style = {{
                    padding: '$3',
                    marginBottom: 15,
                    width: '90%',
                    borderColor: 'black'
            }}/>
            <TextArea placeholder="Phone Number" 
                style = {{
                    padding: '$3',
                    width: '90%',
                    borderColor: 'black'
            }}/>
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

