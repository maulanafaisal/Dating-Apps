import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Jodoh = () =>{
    return(
      <View style={{flex: 1, backgroundColor:'#dbe4f3'}}>
                <View style={{marginTop: 250, bottom: 250, right:40}}>
                        <Image source={require('./images/minder-remove.png')}
                        style={{width: 200, height: 100}}/>
                        </View>
              
                    <View style={styles.container}>
                        <Image
                            style={styles.roundedImage}
                            source={require('./images/puspita.jpeg')}
                        />
                    </View>

                    <View >
                            <Icon name="heart-o" size={120} left={140} bottom={220} 
                            color="#fc0fc0" />
                    </View>

                    
                    <View style={styles.container}>
                        <Image
                            style={styles.roundedImage}
                            source={require('./images/aliv.jpeg')}
                        />
                    </View>

                    <View>
                    <Button title="Submit"/>
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
        width: 150, 
        height: 160,
        borderRadius: 75, // Menggunakan setengah dari lebar/tinggi untuk membuat gambar bundar
        left: 3,
    },
  });
export default Jodoh;