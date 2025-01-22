import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';

// Import screens - Auth
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import VerifyScreen from '../screens/auth/verify';
import NewPasswordScreen from '../screens/auth/newPassword';
import CompleteProfileScreen from '../screens/auth/completeProfile';
import LocationScreen from '../screens/auth/location';
import EnterLocationScreen from '../screens/auth/enterLocation';


// Import screens - Main App
import HomeScreen from '../screens/home/home';
import CartScreen from '../screens/cart/cart';
import WishlistScreen from '../screens/product/wishlist';
import ProfileScreen from '../screens/profile/profile';
import ChatScreen from '../screens/chat/chat';

// Import navigation options
import { tabScreenOptions } from './tabNavigator';
import SearchScreen from '../screens/home/search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainHome" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name='EnterLocation' component={EnterLocationScreen} />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
      <Stack.Screen name='Location' component={LocationScreen} /> 
      <Stack.Screen name="EnterLocation" component={EnterLocationScreen} /> 
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