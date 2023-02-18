import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList,Image, ScrollView } from 'react-native';
import axios from 'axios';
import SMTextField from '../component/SMTextInput';
import SMButton from '../component/SMButton';
import styles from '../styling';
import logo from '../images/logo.png'


 function Order() {


  const [customerName, setCustomerName] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCreateOrder = ({ navigation }) => {
    const data = {
      customerName: customerName,
      productName: productName,
      price: price,
      address: address,
      quantity: quantity
    };

    axios.post('https://lonely-blue-seal.cyclic.app/api/orders')
      .then(response => {
        console.log(response.data); // the created order object from the server
      })
      .catch(error => {
        console.error(error);
      });
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
<View style={styles.p2}>
          <Text style={[styles.fs2, styles.textBold, {color: "green"}]}>Order Form</Text>
        </View>

<View>
<View style={[styles.p2, styles.w100]}>
      <SMTextField  label="Customer Name"
       value={customerName} onChangeText={setCustomerName} />
      </View>
      <View style={[styles.p2, styles.w100]}>
      <SMTextField   label="Product Name"  value={productName} onChangeText={setProductName} />
      </View>
      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Price"
        value={price} onChangeText={setPrice} />
      </View>
      
     
  
      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Address" value={address} onChangeText={setAddress} />
      </View>

      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Quantity" value={quantity} onChangeText={setQuantity} />
      </View>
 
      <View style={[styles.p2, styles.w100]}>
      <SMButton label="Confirm"  onPress={handleCreateOrder} />
      </View>
  
    </View>
    </View>
   
  );
}


export default Order