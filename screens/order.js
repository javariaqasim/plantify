import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList,Image, ScrollView } from 'react-native';
import axios from 'axios';
import SMTextField from '../component/SMTextInput';
import SMButton from '../component/SMButton';
import styles from '../styling';
import logo from '../images/logo.png'


 function Order() {
  const [orders, setOrders] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');

  // useEffect(() => {
  //   fetch('https://long-cyan-dalmatian-hem.cyclic.app/orders')
  //     .then(res => res.json())
  //     .then(data => setOrders(data))
  //     .catch(err => console.error(err));
  // }, []);

  const handleSubmit = () => {
    const order = { customerName, productName, price, address, quantity };

    fetch('https://long-cyan-dalmatian-hem.cyclic.app/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        setOrders([...orders, data]);
        setCustomerName('');
        setProductName('');
        setPrice('');
        setAddress('');
        setQuantity('');
      })
      .catch(err => console.error(err));
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
<Text style={[styles.textBold,{color: "#0D986A", fontSize: 30, top: 8,left: 24,fontSize: 36}]}>Order</Text>
{orders.map(order => (
        <Text key={order._id}>
          {order.customerName} ordered {order.productName} for ${order.price}
        </Text>
      ))}



<View style={{top: 15}}>
<View style={[styles.p2, styles.w100]}>
      <SMTextField  label="Customer Name"
        value={customerName}
        onChangeText={text => setCustomerName(text)} />
      </View>
      <View style={[styles.p2, styles.w100]}>
      <SMTextField   label="Product Name" value={productName} onChangeText={text => setProductName(text)} />
      </View>
      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Price"
        value={price} onChangeText={text => setPrice(text)} keyboardType="numeric" />
      </View>

     
  
      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Address" value={address} onChangeText={text => setAddress(text)} />
      </View>

      <View style={[styles.p2, styles.w100]}>
      <SMTextField label="Quantity" value={address} onChangeText={text => setQuantity(text)} />
      </View>
 
      <View style={[styles.p2, styles.w100]}>
      <SMButton label="Confirm"  onPress={handleSubmit} />
      </View>
  
    </View>
    </View>
   
  );
}


export default Order