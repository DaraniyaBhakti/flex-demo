import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.iconMic} source={require('./assets/baseline_mic_off_white_24dp.png')}/>
      <View style={styles.viewDp}>
       <Image style={styles.iconDp} source={require('./assets/R.jpeg')}/>
      </View>
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
    // justifyContent:'space-between'
  },
  textYou:{
      color:'white',
      alignSelf:'flex-start',
      fontSize:18,
      height:'10%'
  },
  viewDp:{
      height:'85%',
      width:'100%',
      backgroundColor:'red',
      justifyContent:'center'
  },
  iconDp:{
    alignSelf:'center',
    height:'30%',
    width:'50%'
  },
  iconMic:{
    alignSelf:'flex-end',
    marginTop:20,
    height:'5%',
    margin:5,
    width:'5%'
  }
});

