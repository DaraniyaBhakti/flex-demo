import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textYou}>You</Text>
      <Image style={styles.iconDp} source={require('./assets/R.jpeg')}/>
      <Image style={styles.iconMic} source={require('./assets/baseline_mic_off_white_24dp.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    padding:10,
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#000',
    justifyContent:'space-between'
  },
  textYou:{
      color:'white',
      alignSelf:'flex-end',
      fontSize:18,
     
  },
  iconDp:{
    alignSelf:'center',
    width:150,
    height:150,
  },
  iconMic:{
    marginTop:20,
    width:30,
    height:30,
    
  }
});
