import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';

// Import screens - Auth
import LoginScreen from '../screens/auth/loginScreen';
import RegisterScreen from '../screens/auth/registerScreen';
import VerifyScreen from '../screens/auth/verifyScreen';
import NewPasswordScreen from '../screens/auth/newPasswordScreen';
import CompleteProfileScreen from '../screens/auth/completeProfileScreen';
import LocationScreen from '../screens/auth/locationScreen';


// Import screens - Main App
import HomeScreen from '../screens/home/homeScreen';
import CartScreen from '../screens/cart/cartScreen';
import WishlistScreen from '../screens/product/wishlistScreen';
import ProfileScreen from '../screens/profile/profileScreen';
import ChatScreen from '../screens/chat/chatScreen';

// Import navigation options
import { tabScreenOptions } from './tabNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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