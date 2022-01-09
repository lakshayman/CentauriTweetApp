/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [borderColor,setBColor] = useState('black');

  const styles = StyleSheet.create({
    container: {
      display: 'flex', 
      height: '100%', 
      justifyContent: 'center'
    },
    inputArea: {
      padding: 20,
      height: 300,
      borderWidth: 5, 
      margin: 10, 
      borderRadius: 20, 
      textAlign: 'center', 
      borderColor: borderColor,
    },
    bottomText: {
      textAlign: 'center', 
      fontSize: 20
    },
  });

  return (
    <View style={styles.container}>
      <TextInput 
        multiline
        value={text}
        style={styles.inputArea}
        onChangeText={(e)=>{
          setText(e);
          if(50 - e.length <= 20 && 50 - e.length >= 0){
            setBColor('yellow');
          }else if(50 - e.length < 0){
            setBColor('red');
          }else{
            setBColor('black');
          }
        }}
      />
      <Text style={styles.bottomText}>Character Left: {50 - text.length}</Text>
    </View>
  );
};

export default App;
