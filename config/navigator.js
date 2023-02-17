import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splashscreen';
import SignUp from '../screens/signup';
import Login from '../screens/login';
import Home from '../screens/home';
import Country from '../screens/country';
import LiveLocation from '../screens/livelocation';
import GoogleMap from '../screens/googlemap';
import CameraScreen from '../screens/camera';
import SingleProduct from '../screens/singleProduct';
import Order from '../screens/order';
import Checkout from '../screens/checkout';
import Wishlist from '../screens/wishlist';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SingleProduct" component={SingleProduct} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="GoogleMap" component={GoogleMap} />
                <Stack.Screen name="Country" component={Country} />
                <Stack.Screen name="LiveLocation" component={LiveLocation} />
                <Stack.Screen name="Camera" component={CameraScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;