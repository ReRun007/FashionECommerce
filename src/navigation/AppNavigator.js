import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';

// Import screens - Auth
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Verify from '../screens/auth/verify';
import NewPassword from '../screens/auth/newPassword';
import CompleteProfile from '../screens/auth/completeProfile';
import Location from '../screens/auth/location';
import EnterLocation from '../screens/auth/enterLocation';


// Import screens - Main App
import Home from '../screens/home/home';
import Cart from '../screens/cart/cart';
import Wishlist from '../screens/product/wishlist';
import Profile from '../screens/profile/profile';
import Chat from '../screens/chat/chat';
import Search from '../screens/home/search';
import ProductDetails from '../screens/product/productDetails';


// Import navigation options
import { tabScreenOptions } from './tabNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name='EnterLocation' component={EnterLocation} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      <Stack.Screen name='Location' component={Location} /> 
      <Stack.Screen name="EnterLocation" component={EnterLocation} /> 
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;