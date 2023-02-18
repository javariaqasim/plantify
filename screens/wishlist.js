import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
import axios from 'axios';
import logo from '../images/logo.png'

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    axios.get('https://lonely-blue-seal.cyclic.app/wishlist')
      .then(response => setWishlistItems(response.data))
      .catch(error => console.log(error));
  }, []);

  // const handleAddToWishlist = (productId) => {
  //   axios.post('https://lonely-blue-seal.cyclic.app/wishlist', { productId })
  //     .then(response => {
  //       const newWishlistItem = response.data;
  //       setWishlistItems([...wishlistItems, newWishlistItem]);
  //     })
  //     .catch(error => console.log(error));
  // };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.product.name}</Text>
        <Text>{item.product.price}</Text>
      </View>
    );
  };

  return (
<>
<View>
      <Image
            source={logo}
            resizeMode="contain"
            style={{width: 195, height: 40, borderRadius: 50, left: 24,
              top: 10
              }}
          />

        </View>

    <FlatList
      data={wishlistItems}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      ListEmptyComponent={() => (
        <View style={styles.empty}>
          <Text style={{color: "green"}}>Your wishlist is empty</Text>
        </View>
      )}
    />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  empty: {
    alignItems: 'center',
    padding: 20,
  },
});

export default Wishlist;