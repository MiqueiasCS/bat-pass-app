import React from "react";
import {Text, View} from "react-native"
import { StatusBar } from 'expo-status-bar';
import {styles} from './Style'
import { BatLogo } from "../../compoments/BatLogo/BatLogo";
import { BatBtn } from "../../compoments/BatBtn/BatBtn";

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatBtn/>
            </View>
            <Text>Home works!!</Text>
            <StatusBar style="light" />
        </View>
        
    )
}

