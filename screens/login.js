import {Text, View,TouchableOpacity,Image, Alert, ScrollView} from 'react-native';
import styles from '../styling';
import { useState } from 'react';
import SMTextField from '../component/SMTextInput'
import SMButton from '../component/SMButton'
import axios from 'axios';
import logo from '../images/logo.png'

function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async () => {
      if (!email || !password) {
        return Alert.alert('Error', 'Please fill in all the required fields.');
      }
  
      try {
        const response = await axios.post('https://long-cyan-dalmatian-hem.cyclic.app/api/login', {
          email,
          password
        });
  
        if (response.data.status) {
          Alert.alert('Success', 'User successfully login!');
          navigation.navigate('Home', { token: response.data.token });
        } else {
          Alert.alert('Error', response.data.message);
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Something went wrong.');
      }
    };

  

    return (

        <View style={[styles.h100, {background: "#FFFFFF"}]}>
         <View>
          <Image
            source={logo}
            resizeMode="contain"
            style={{width: 195, height: 40, borderRadius: 50, left: 24,
              top: 10
              }}
          />
        </View>
      
             <Text style={{color: "#0D986A", fontSize: 30, top: 40,left: 24,fontSize: 36}}>Login</Text>
             <Text style={{color: "#0D986A", position: "absolute",left: 24, top: 160,fontSize: 16}}> Masukan No. Handphone Anda dan tunggu kode autentik dikirimkan</Text>

             <View style={{top: 140}}>
           <View style={[styles.p2, styles.w100]}>
  

            <SMTextField  label="Enter Your Email" value={email} onChangeText={setEmail} />
        </View>

        <View style={[styles.p2, styles.w100]}>

          <SMTextField
          label="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        </View>
        <View style={[styles.p2, styles.w100]}>

          <SMButton  onPress={handleLogin} label="Login" />

        </View>

        <View style={[styles.p2, styles.w100]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Sign Up');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3,{color: "#0D986A"}]}>
                Create new account?
              </Text>
            </TouchableOpacity>
      
        </View>
        

</View>

    </View>    
 
        
    )
}

export default Login;