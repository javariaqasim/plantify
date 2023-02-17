import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../styling';
import awal from '../images/awal.png'

function Splash({navigation}) {
  return (
    <>

      <View style={[ styles.h100, {background: "#FFFFFF"}]}>
        <View>
          <Image
            source={awal}
            resizeMode="contain"
            style={{width: 397, height: 455, borderRadius: 50}}
          />
        </View>


        <View style={[styles.p2, styles.w100, styles.flexCenter]}>
          <Text style={{color: "#0D986A", position: "absolute",left: 24, top: 10,fontSize: 33}}>GET READY BE HIGYENIC</Text>
          <Text style={{color: "#0D986A", top: 80,fontSize: 15}}>Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe Illustrator</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sign Up');
            }}
            style={[styles.btn,{top: 99,}]}>
            <Text style={[styles.textPrimary, styles.fs3]}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Splash;
