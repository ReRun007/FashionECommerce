import { View, StyleSheet, Image, Animated } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/colors';

const TabIcon = ({ focused, route }) => {
    const [scaleAnim] = React.useState(new Animated.Value(1));
    const [backgroundOpacity] = React.useState(new Animated.Value(focused ? 1 : 0));

    React.useEffect(() => {
        if (focused) {
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(scaleAnim, {
                        toValue: 0.8,
                        duration: 100,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1.1,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.spring(scaleAnim, {
                        toValue: 1,
                        useNativeDriver: true,
                        bounciness: 12,
                    }),
                ]),
                Animated.timing(backgroundOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.timing(backgroundOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [focused]);

    let iconSource;
    switch (route.name) {
        case 'Home':
            iconSource = focused 
                ? require('../assets/icons/home.png')
                : require('../assets/icons/home_outline.png');
            break;
        case 'Cart':
            iconSource = focused 
                ? require('../assets/icons/bag.png')
                : require('../assets/icons/bag_outline.png');
            break;
        case 'Wishlist':
            iconSource = focused 
                ? require('../assets/icons/heart.png')
                : require('../assets/icons/heart_outline.png');
            break;
        case 'Chat':
            iconSource = focused 
                ? require('../assets/icons/message.png')
                : require('../assets/icons/message_outline.png');
            break;
        case 'Profile':
            iconSource = focused 
                ? require('../assets/icons/profile.png')
                : require('../assets/icons/profile_outline.png');
            break;
    }

    return (
        <View style={styles.iconWrapper}>
            <Animated.View
                style={[
                    styles.iconBackground,
                    {
                        opacity: backgroundOpacity,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            />
            <Animated.Image 
                source={iconSource}
                style={[
                    styles.iconImage,
                    {
                        tintColor: focused ? '#B88E60' : '#7E7E7E',
                        transform: [{ scale: scaleAnim }],
                    }
                ]}
                resizeMode="contain"
            />
        </View>
    );
};

const AnimatedTabBar = ({ state, descriptors, navigation }) => {
    const [translateY] = React.useState(new Animated.Value(100));

    React.useEffect(() => {
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            tension: 40,
            friction: 8,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.tabBarContainer, {
            transform: [{ translateY }]
        }]}>
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <View key={route.key} style={styles.tabItem}>
                            {options.tabBarIcon({ focused: isFocused })}
                        </View>
                    );
                })}
            </View>
        </Animated.View>
    );
};

export const tabScreenOptions = {
    tabBar: (props) => <AnimatedTabBar {...props} />,
    headerShown: false,
};

const styles = StyleSheet.create({
    iconWrapper: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 90,
    },
    iconImage: {
        width: 24,
        height: 24,
    },
    tabBarContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        borderRadius: 90,
        height: 65,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AnimatedTabBar;