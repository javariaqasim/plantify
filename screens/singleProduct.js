import React from 'react';
import {View, Text, Image, ScrollView,TouchableOpacity,Button,Alert} from 'react-native';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import logo from '../images/logo.png'


function SingleProduct({navigation, route}) {


  
  console.log(route.params);
  let obj = route.params;

  const handleAddToWishlist = (productId) => {
    axios.post('https://long-cyan-dalmatian-hem.cyclic.app/wishlist', { productId })
      .then(response => {
        const newWishlistItem = response.data;
        setWishlistItems([...wishlistItems, newWishlistItem]);
      })
      .catch(error => console.log(error));
  };



  return (
    <>
    <ScrollView>
    <View>
<Image
  source={logo}
  resizeMode="contain"
  style={{width: 195, height: 40, borderRadius: 50, left: 24, top: 10
    }}
/>

</View>
      <View style={[ styles.h100, styles.p2, {background: "#FFFFFF"}]}>

<View >
        <Image source={{uri: obj.image}} style={{height: 300, width: '100%'}} />
        <Text style={[styles.fs2, styles.py1,styles.textBold,{color: "green"}]}>
          {obj.title}:
        </Text>
          <Text style={[styles.fs5,{color: 'grey'}]}>{obj.description}</Text>


          <Text
            style={[
              styles.bgLight,
              styles.p2,
              styles.rounded,
              styles.fs3,
              styles.my2,
              styles.textBold,
              {color: "white"}
            ]}>
            {obj.category}
            
          </Text>

          

          <Text style={[styles.fs2,styles.textBold, {color: "green"}]}>Price: ${obj.price}/-</Text>

          <Text
            style={[
              styles.fs3,
              styles.textSecondary,
              styles.flexRow,
              styles.alignItemsCenter,
            ]}>
        <TouchableOpacity  onPress={() => handleAddToWishlist(item._id)}>    
                       <Image style={{width: 43, height: 43}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_drvzmAmdlY-jFBqw2F5PKHtg2HOjoX97bA&usqp=CAU"}} />
                       </TouchableOpacity>
          </Text>
          
        <View>


        <TouchableOpacity onPress={()=>{
                navigation.navigate('Checkout',obj)
            }} style={[styles.btn,{top: 10}]}>
                  <Text style={styles.textCenter}><Icon style={{color: "white"}} name="add-shopping-cart" size={50}  /></Text>

                </TouchableOpacity>

                </View>
        </View>
      </View>
      </ScrollView>
    </>
  );
}
export default SingleProduct;
