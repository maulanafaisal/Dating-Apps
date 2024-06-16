import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const App = () =>{
  return (
  <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 250}}>
      <Image source={require('./src/images/minder-remove.png')}
        style={{width: 300, height: 100}}/>
      </View>

      <TouchableOpacity 
        style={{
          backgroundColor: '#bf77f6',
          paddingVertical : 14,
          marginTop : 20,
          marginHorizontal : 20,
          borderRadius : 15,
          elevation: 2,
        }}>
          <Text style={{color :'#FFFFFF', textAlign: 'center'}}>Sign in</Text>
          </TouchableOpacity>
  </View>
  );
};

export default App;