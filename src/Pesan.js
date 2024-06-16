import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pesan = () =>{

    return(
        <View style={{flex:1, backgroundColor:'#dbe4f3'}}>
                <View style={{marginTop: 250, bottom: 250, right:40}}>
                        <Image source={require('./images/minder-remove.png')}
                        style={{width: 200, height: 100}}/>
                </View>

                <Text style={{textAlign:'center', bottom:250, minHeight:30, color:'#bf77f6', 
                    fontWeight:'bold', fontSize: 20}}>CHATTING</Text>
                    
                    <View style={styles.container}>
                        <Image
                            style={styles.roundedImage}
                            source={require('./images/aliv.jpeg')}
                        />
                        <TextInput 
                            style={{textAlign:'center',
                            borderRadius : 15,
                            borderColor: 'purple',
                            borderWidth: 1,
                            bottom: 320,
                            right : 30,
                            fontWeight: 'bold'
                                    }}
                            placeholder="Halo, Salken Dong"
                            keyboardType='email-address'                 
                            />
                    </View>


                    <View style={styles2.container}>
                        <Image
                            style={styles2.roundedImage}
                            source={require('./images/puspita.jpeg')}
                        />
                        <TextInput 
                            style={{textAlign:'center',
                            borderRadius : 15,
                            borderColor: 'purple',
                            borderWidth: 1,
                            bottom: 320,
                            left : 20,
                            fontWeight: 'bold'
                                    }}
                            placeholder="Halo, Salken Dong"
                            keyboardType='email-address'                 
                            />
                    </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundedImage: {
        bottom: 220,
        width: 120,
        left: 100, 
        height: 160,
        borderRadius: 75, // Menggunakan setengah dari lebar/tinggi untuk membuat gambar bundar
  
    },
  });

  const styles2 = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundedImage: {
        bottom: 220,
        width: 120,
        right: 120, 
        height: 160,
        borderRadius: 70, // Menggunakan setengah dari lebar/tinggi untuk membuat gambar bundar
  
    },
  });

export default Pesan;
