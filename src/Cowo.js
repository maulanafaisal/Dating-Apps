import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cowo = () =>{
    return(
        <View style={{flex: 1, backgroundColor:'#dbe4f3'}}>

            <View style={{marginTop: 250, bottom: 250, right:40}}>
                <Image source={require('./images/minder-remove.png')}
                        style={{width: 200, height: 100}}/>
                    <View>
                    <Icon name="user" size={50} left={390} bottom={75} color="#000000" />
                    </View>

                    <View >
                    <Icon name="twitch" size={50} left={325} bottom={117} 
                    color="#000000" />
                    </View>

                    <Text style={{marginBottom:2, minHeight:30, color:'#b200ed', 
                    fontWeight:'bold', fontSize: 20, left:40, 
                    bottom:30, textAlign:'center'}}>CARI ORANG SEKITAR
                    </Text>
                        
                    <View style={styles.container}>
                        <Image
                            style={styles.roundedImage}
                            source={require('./images/aliv.jpeg')}
                        />
                        </View>

                        <View >
                            <Icon name="chevron-left" size={50} left={50} top={80} 
                            color="#000000" />
                        </View>

                        <View >
                            <Icon name="chevron-right" size={50} left={380} top={30} 
                            color="#000000" />
                        </View>

                        <Text style={{color:'#000000', 
                    fontWeight:'bold', fontSize: 20, left:40, 
                    top:100, textAlign:'center'}}>El
                    </Text>

                    <Text style={{color:'#000000', 
                    fontWeight:'bold', fontSize: 20, left:40, 
                    top:100, textAlign:'center'}}>20 Tahun
                    </Text>


                        <View >
                            <Icon name="heart-o" size={50} left={100} top={50} 
                            color="#000000" />
                        </View>

                        <View >
                            <Icon name="close" size={50} left={320} bottom={5} 
                            color="#000000" />
                        </View>

            </View>
        </View>
    );
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundedImage: {
        top: 100,
        width: 120, 
        height: 150,
        borderRadius: 75, // Menggunakan setengah dari lebar/tinggi untuk membuat gambar bundar
        left: 43,
    },
  });

export default Cowo;