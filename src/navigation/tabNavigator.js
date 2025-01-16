import { View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/colors';

export const tabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconSource;

        if (route.name === 'Home') {
            iconSource = iconSource = focused 
                ? require('../assets/icons/home.png')
                : require('../assets/icons/home_outline.png');
        } else if (route.name === 'Cart') {
            iconSource = iconSource = focused 
                ? require('../assets/icons/bag.png')
                : require('../assets/icons/bag_outline.png');
        } else if (route.name === 'Wishlist') {
            iconSource = iconSource = focused 
                ? require('../assets/icons/heart.png')
                : require('../assets/icons/heart_outline.png');
        } else if (route.name === 'Chat') {
            iconSource = iconSource = focused 
                ? require('../assets/icons/message.png')
                : require('../assets/icons/message_outline.png');
        } else if (route.name === 'Profile') {
            iconSource = iconSource = focused 
                ? require('../assets/icons/profile.png')
                : require('../assets/icons/profile_outline.png');
        }

        return (
            <View style={{
                padding: 0,
                borderRadius: 90,
                backgroundColor: focused ? '#FFFFFF' : 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 55,
                width: 55,
            }}>
                <Image 
                source={iconSource}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#B88E60' : '#7E7E7E'  // เปลี่ยนสีตาม focused state
                }}
                resizeMode="contain"
            />
            </View>
        );
    },
    tabBarActiveTintColor: '#67513b',
    tabBarInactiveTintColor: '#98999c',
    tabBarShowLabel: false,
    headerShown: false,

    tabBarStyle: {
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
});