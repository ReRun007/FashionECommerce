import { View, StyleSheet, Image, Animated } from 'react-native';
import React, { useRef } from 'react';

export const tabScreenOptions = ({ route, navigation }) => {

  const currentIndex = navigation?.getState()?.routes?.[0]?.state?.index ?? 0;

  return {
    tabBarIcon: ({ focused }) => {
      // Create a unique Animated.Value for each button
      const buttonScale = useRef(new Animated.Value(1)).current;

      const animateButton = () => {
        Animated.sequence([
          Animated.timing(buttonScale, {
            toValue: 0.8,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(buttonScale, {
            toValue: 1.1,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(buttonScale, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start();
      };

      // Trigger animation only when the button is focused
      if (focused) {
        animateButton();
      }

      let iconSource;
      if (route.name === 'Home') {
        iconSource = focused
          ? require('../assets/icons/home.png')
          : require('../assets/icons/home_outline.png');
      } else if (route.name === 'Cart') {
        iconSource = focused
          ? require('../assets/icons/bag.png')
          : require('../assets/icons/bag_outline.png');
      } else if (route.name === 'Wishlist') {
        iconSource = focused
          ? require('../assets/icons/heart.png')
          : require('../assets/icons/heart_outline.png');
      } else if (route.name === 'Chat') {
        iconSource = focused
          ? require('../assets/icons/message.png')
          : require('../assets/icons/message_outline.png');
      } else if (route.name === 'Profile') {
        iconSource = focused
          ? require('../assets/icons/profile.png')
          : require('../assets/icons/profile_outline.png');
      }

      return (
        <Animated.View
          style={{
            padding: 0,
            borderRadius: 90,
            backgroundColor: focused ? '#FFFFFF' : 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 55,
            width: 55,
            transform: [{ scale: buttonScale }],
          }}
        >
          <Image
            source={iconSource}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#B88E60' : '#7E7E7E',
            }}
            resizeMode="contain"
          />
        </Animated.View>
      );
    },
    tabBarActiveTintColor: '#67513b',
    tabBarInactiveTintColor: '#98999c',
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: currentIndex > 0
    ? { display: 'none' } 
    : {
      position: 'absolute',
      backgroundColor: '#000000',
      marginHorizontal: 20,
      marginBottom: 30,
      borderRadius: 90,
      height: 65,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
};
