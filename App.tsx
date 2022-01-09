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
  return (
    <View style={{display: 'flex', height: '100%', justifyContent: 'center'}}>
      <TextInput 
        multiline
        value={text}
        style={{padding: 20,height: 300, borderWidth: 5, margin: 10, borderRadius: 20, textAlign: 'center', borderColor: borderColor}}
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
      <Text style={{textAlign: 'center', fontSize: 20}}>Character Left: {50 - text.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
