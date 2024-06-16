import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    
    <View style={styles.container}>
        <View>
        <Image source={require('./images/minder-remove.png')}
                        style={{width: 200, height:100, marginBottom:5, right:130, bottom:70}}
                    ></Image>

               <View>
               <Text style={{marginBottom:2, minHeight:30, color:'#b200ed', fontWeight:'bold', fontSize: 20, 
               bottom:60, textAlign:'center'}}>PROFILE</Text>
                </View>     
        </View>
        
      <View style={styles.box}>
      <Image source={require('./images/aliv.jpeg')}
                        style={{width: 70, height:100, marginBottom:20, right:70, top:30}}
                    ></Image>
        <Text style={{left:30, bottom:70, fontWeight:'bold', color:'#000000'}}>EL MUNZIR</Text>
        <Text style={{left:30, bottom:70, fontWeight:'bold', color:'#000000'}}>21 tahun</Text>
        <Text style={{left:30, bottom:70, fontWeight:'bold', color:'#000000'}}>elmunzir@gmail.com</Text>
        
      </View>

        
        <View>   
            <Text style={{bottom:2, fontWeight:'bold', color:'#000000', right:30}}>CHANGE PROFILE</Text>
            <Icon name="user" size={30} color="#000000" bottom={30} right={80}/>
        </View>
        <View style={styles.line}></View>

        <View>
        <Text style={{bottom:2, fontWeight:'bold', color:'#000000', right:30}}>EDIT PROFILE</Text>
        <Icon name="edit" size={30} color="#000000" bottom={30} right={92}/>
        </View>
        <View style={styles.line}></View>

        <View>   
            <Text style={{bottom:2, fontWeight:'bold', color:'#000000', right:30}}>LOG OUT</Text>
            <Icon name="home" size={30} color="#000000" bottom={30} right={110}/>
        </View>
        <View style={styles.line}></View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbe4f3',
  },
  //EDIT BOX
  box: {
    backgroundColor: '#b200ed', // Warna latar belakang kotak
    padding: 2,
    bottom: 60,
    borderRadius: 20, // Sudut bulat pada kotak
    paddingHorizontal: 90,
  },
  
  //EDIT TEXT
  text: {
    color: '#000000', // Warna teks
    fontSize: 18,
    fontWeight: 'bold',
    left: 50,
    bottom: 50

  },

  // EDIT GARIS
  line: {
    width: '80%', // Sesuaikan dengan lebar garis yang Anda inginkan
    borderBottomWidth: 1,
    fontWeight: 'bold',
    borderColor: '#000000', // Warna garis
    marginVertical: 20, // Sesuaikan dengan jarak vertikal dari konten di atas dan di bawah garis
    bottom: 40,
    },
});

export default App;
