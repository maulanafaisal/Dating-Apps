import React, {useState  } from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () =>{
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = () =>{
            console.log('Email', email);
            console.log('Password', password);
        };

        return (
            <View style={style.container}>
                
                    <Image source={require('./images/minder-remove.png')}
                        style={{width: 200, height:100, marginBottom:20, right:60}}
                    ></Image>
                    
                    <Text style={{marginBottom:2, minHeight:30, color:'#bf77f6', textAlign:'center',
                    fontWeight:'bold', fontSize: 20}}>Register</Text>
                    
                <TextInput 
                    style={style.input}
                    placeholder="Email or Username"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'                 
                />
                <TextInput 
                    style={style.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                 <TextInput 
                    style={style.input}
                    placeholder="Ulang Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />

                  <TextInput 
                    style={style.input}
                    placeholder="Jenis Kelamin"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                  />

                  <TextInput 
                    style={style.input}
                    placeholder="Umur"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                  />
                   <TextInput 
                    style={style.input}
                    placeholder="Tertarik pada"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity 
        style={{
          backgroundColor: '#bf77f6',
          paddingVertical : 14,
          marginTop : 40,
          marginHorizontal : 2,
          borderRadius : 15,
          elevation: 2,
        }}>
          <Text style={{color :'#FFFFFF', textAlign: 'center'}}>Register</Text>
          </TouchableOpacity>

          <Text style={{color:'#bf77f6', textAlign: 'center', marginTop:200}}> Don't have Account? 
                <Text style={{fontWeight:'bold'}}>Sign Up</Text>
          
          </Text>
            </View>
        );
};

const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    
    input: {
        height: 40,
        color : '#bf77f6',
        borderRadius : 15,
        borderColor: 'purple',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        marginHorizontal: 0,
    },
});

export default Login;