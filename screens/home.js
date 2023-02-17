import React, { useState, useEffect } from "react";
import { View, Text,ImageBackground,FlatList,Image,TouchableOpacity,ScrollView } from "react-native";
import axios from "axios";
import SMTextField from "../component/SMTextInput";
import styles from "../styling";
import logo from '../images/logo.png'
import banner from '../images/banner.png'




function Home({navigation}) {

  const [searchTerm, setSearchTerm] = useState("");
  
  const [searchResults, setSearchResults] = useState([]);

  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Top Pick', 'Indoor', 'Outdoor', 'Seeds','Plants'];

  const [productList, setProductList] = useState([]);
  
  const search = async () => {
    try {
      const response = await fetch(`https://long-cyan-dalmatian-hem.cyclic.app/search?term=${searchTerm}`);
      const json = await response.json();
      if (json.success) {
        setSearchResults(json.items);
      }
    } catch (err) {
      console.error(err);
    }
  };


  let getData = () => {
    let api = 'https://long-cyan-dalmatian-hem.cyclic.app/api/cards';
    axios
      .get(api)
      .then(res => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let move = (e)=>{
    navigation.navigate('SingleProduct',e)
  }

  useEffect(() => {
    getData();
  }, []);

  return (

    

    <ScrollView>
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
        
        <ImageBackground source={banner}></ImageBackground>

      <View style={{ marginTop: 10, alignItems: 'center',
    padding: 10,}}>
      
      <Image
      style={{ width: 385,
        height: 180,
       }}
        source={banner}
      />

    </View>



    <View style={[styles.p2, styles.w100]}>
      <SMTextField
      label="Search Here.........."
      value={searchTerm}
      onChangeText={setSearchTerm}
      onSubmitEditing={search}
      />
   <FlatList
        data={searchResults}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>

    <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                catergoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>


      <View
          style={[
            styles.p2,
            styles.py3,
            {borderBottomRightRadius: 15, flex: 1},
          ]}>
          <View>
            <Text style={[ styles.textBold,styles.fs2,styles.textCenter,{color: 'green'}]}>
             Plants Products:
            </Text>
          </View>
        </View>
        <View style={[{flex: 6}]}>
            <View
              style={[
                {height: '100%'},
                styles.flexRow,
                styles.flexWrap,
                styles.justifyContentBetween,
              ]}>
              {productList &&
                productList.map((e, i) => (
                  <TouchableOpacity
                  onPress={()=>move(e)}
                    style={[
                      styles.bgWhite,
                      styles.m1,
                      styles.rounded,
                      {width: '95%', height: "7%"},
                    ]}
                    key={i}>
                    <Image
                      resizeMode="cover"
                      style={[{width: '100%', height: 100}, styles.rounded]}
                      source={{uri: e.image}}
                    />
                    <View style={styles.p1}>
                      <Text style={[{color: 'green', fontSize: 20}]} numberOfLines={1}>{e.title}:</Text>
                      <Text style={[{color: 'gray', fontSize: 20 }]}>
                        Rs:{e.price}/-
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
        </View>
      <View>
        <Text style={[styles.textCenter,styles.textBold,{color: 'green', fontSize: 30}]}>Plant a Life</Text>
        <Text style={[styles.textCenter,styles.textBold,{color: '#002140', fontSize: 28}]}>Live amongst Living</Text>
        <Text style={[styles.textCenter,styles.textBold,{color: 'grey', fontSize: 26}]}>Spread the joy</Text>
      </View>




    </View>
    </ScrollView>

 

    

  );
};


export default Home;

