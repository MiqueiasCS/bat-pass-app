import React, { useState } from 'react';
import {Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatBtnStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatBtn() {
  const [pass,setPass] = useState('')

  function handleGenerateBtn(){
    let generatedPass = generatePass()
    setPass(generatedPass)
  }

  function handleCopybtn(){
    Clipboard.setStringAsync(pass)
  }

  return (
    // <Button accessibilityLabel='clique em mim' onPress={()=>console.log('Olá') } title="Clique aqui" color="#831584"/>
    <>
     <BatTextInput pass={pass}/>
    <Pressable onPress={handleGenerateBtn} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
    </Pressable>

    <Pressable onPress={handleCopybtn} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
    </Pressable>
    </>
  );
}