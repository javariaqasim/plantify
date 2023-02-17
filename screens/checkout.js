import React from 'react';
import {Text, View, Image,TouchableOpacity} from 'react-native';
import styles from '../styling';
import logo from '../images/logo.png'

function Checkout({navigation, route}) {
  let ordersArr = [route.params];


  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   axios.get('https://long-cyan-dalmatian-hem.cyclic.app/api/cards')
  //     .then(response => setProductList(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  const handleDeleteCartItem = (id) => {
    axios.delete(`https://long-cyan-dalmatian-hem.cyclic.app/api/cards/${id}`)
      .then(response => {
        const updatedCardsItems = CardsItems.filter(item => item._id !== id);
        setCardsItems(updatedCardsItems);
      })
      .catch(error => console.log(error));
  };

  
  return (
    <>
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
          <Text style={[styles.fs2, styles.textBold, {color: "green"}]}>Your Bag</Text>
        </View>
        <View>
          {ordersArr.map((x, i) => (
            <View
              style={[
                styles.m1,
                styles.bgWhite,
                styles.rounded,
                styles.shadow1,
                styles.p1,
              ]}
              key={i}>
              <View style={[styles.flexRow,styles.w100,styles.justifyContentBetween]}>

            
                <View style={styles.w20}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: x.image}}
                  />
             
                  <View style={{display: 'flex', alignItems: "center", justifyContent: "space-around", flexDirection: 'row'}}>
                  <TouchableOpacity> 
                     <Image style={{width: 32, height: 34}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMYnrOq1Ga002Mt90x0i-b0Z7Ka1G_Ermxw&usqp=CAU"}} />
                     </TouchableOpacity>
                  <TouchableOpacity>    
                       <Image style={{width: 30, height: 30}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29dSMIWslt7-A0sGF6O5UTqNbNuo6aTUsBQ&usqp=CAU"}} />
                       </TouchableOpacity>
                       <TouchableOpacity  onPress={() => handleDeleteCartItem(item._id)}>    
                       <Image style={{width: 34, height: 37}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EMnEciew_onpMaTiS2xtPZxPlw4upCFNpQ&usqp=CAU"}} />
                       </TouchableOpacity>
               

                  </View>
       
                </View>

                <View style={styles.w50}>
                  <Text style={[styles.textBold,{color: 'green', fontSize: 20 }]} noOfLines={1}>
                    {x.title}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.textBold,{color: 'gray', fontSize: 20 }]}>
                    ${x.price}/-
                  </Text>
                </View>



  
              </View>
            </View>
          ))}
        </View>

        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Order',)
            }} style={styles.btn}>
                <Text style={[styles.textWhite,styles.textCenter,styles.fs5]}>Order</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Wishlist')
            }} style={[styles.btn,{top: 310}]}>
                <Text style={[styles.textWhite,styles.textCenter,styles.fs5]}>Go To Your Wishlist</Text>
            </TouchableOpacity>
        </View>
      </View>

    </>
  );
}
export default Checkout;
