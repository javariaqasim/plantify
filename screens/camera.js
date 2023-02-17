import react, { useState } from "react";
import { View,Text,TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../styling";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



function CameraScreen({navigation}){

const [url,setUrl]=useState('')

    let CameraOpen = async ()=>{
      let res= await launchCamera({
            mediaType:'photo',
            includeBase64: true
            })
            console.log(res)
            setUrl(res.assets.base64)
    };

    let GalleryOpen = async ()=>{
        let res= await launchImageLibrary({
              mediaType:'photo',
              includeBase64: true
              })
              console.log(res)
              setUrl(res.assets.base64)
      };
      
    
    return(
        <>
           <ImageBackground
    source={{
      uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm422-073.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ef48caa87980815f77343e682d6324ee',
    }}>
        <View style={[styles.h100, styles.flexCenter,]}>
            <Text style={[styles.textWhite,styles.fs4,styles.textBold]}>CameraScreen</Text>
                <TouchableOpacity style={[styles.btn, styles.my2]}>
                    <Text onPress={CameraOpen} style={[styles.textWhite,styles.fs4,styles.textBold]}>
                        Open Camera
                    </Text>
                </TouchableOpacity>
                <View>
                    <Image style={{width: 200,height: 200}} source={{uri: url}} />
                </View>
                <TouchableOpacity onPress={GalleryOpen} style={[styles.btn,styles.my2]}>
                    <Text style={[styles.textWhite,styles.fs4,styles.textBold]}>
                        Open Gallery
                    </Text>
                </TouchableOpacity>
            
        </View>
        </ImageBackground>
        </>
    )
}

export default  CameraScreen