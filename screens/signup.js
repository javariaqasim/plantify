
import { useState } from 'react';
import { Button, Text, View,TouchableOpacity,Image,Alert, ScrollView} from 'react-native';
import styles from "../styling"
import SMTextField from '../component/SMTextInput'
import SMButton from '../component/SMButton'
import axios from 'axios';
import logo from '../images/logo.png'


function SignUp({ navigation }) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


const handleSignUp = async () => {
  if (!firstname || !lastname || !email || !password) {
    return Alert.alert('Error', 'Please fill in all the required fields.');
  }

  try {
    const response = await axios.post('https://long-cyan-dalmatian-hem.cyclic.app/api/signup', {
      firstname,
      lastname,
      email,
      password
    });

    if (response.data.status) {
      Alert.alert('Success', 'User successfully signup!');
      navigation.navigate('Login');
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
       
             <Text style={{color: "#0D986A", fontSize: 30, top: 8,left: 24,fontSize: 36}}>Signup</Text>
             <Text style={{color: "#0D986A", position: "absolute",left: 24, top: 110,fontSize: 16}}> Masukan No. Handphone Anda dan tunggu kode autentik dikirimkan</Text>
            
             <View style={{top: 60}}>
             <View style={[styles.p2, styles.w100]}>
             <SMTextField value={firstname} onChangeText={setFirstname} label="Enter Your First Name" />
        </View>
        
        <View style={[styles.p2, styles.w100]}>
        
            <SMTextField value={lastname} onChangeText={setLastname} label="Enter Your Last Name" />
        </View>
        <View style={[styles.p2, styles.w100]}>
 
            <SMTextField value={email} onChangeText={setEmail} label="Enter Your Email" />
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

          <SMButton label="Signup" title="Sign Up" onPress={handleSignUp} />
        </View>
     
  
        <View style={[styles.p2, styles.w100,]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3,{color: "#0D986A"}]}>
                Already have an account?
              </Text>
            </TouchableOpacity>
    
        </View>

        </View>

        </View>
   
     
    )
}

export default SignUp;


