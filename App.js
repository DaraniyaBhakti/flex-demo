import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.iconMic} source={require('./assets/baseline_mic_off_white_24dp.png')}/>
      <Image style={styles.iconDp} source={require('./assets/R.jpeg')}/>
      <Text style={styles.textYou}>You</Text> 
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    paddingTop:30,
    padding:10,
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#000',
    justifyContent:'space-between'
  },
  textYou:{
      color:'white',
      alignSelf:'flex-start',
      fontSize:18,
     
  },
  iconDp:{
    alignSelf:'center',
    width:150,
    height:150,
  },
  iconMic:{
    alignSelf:'flex-end',
    marginTop:20,
    width:30,
    height:30,
    
  }
});

