import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import BackButton from '../../components/common/backButton';
import HeartButton from '../../components/common/heartButton';
import { TEXT } from '../../constants/text';
import COLORS from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;

export default function ProductDetails() {
    const images = [...Array(15)]; // สมมติว่ามี 15 รูป

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={TEXT.h3}>Product Details</Text>
                <HeartButton />
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/product3.png')}
                    style={styles.image}
                />
                <View style={styles.imagesListContainer}>
                    {images.slice(0, 4).map((a, index) => (
                        <TouchableOpacity key={index} style={styles.imageListContainer}>
                            <Image
                                source={require('../../assets/images/product3.png')}
                                style={styles.imageList}
                            />
                        </TouchableOpacity>
                    ))}
                    {images.length > 4 && (
                        <View style={[styles.imageListContainer, styles.moreImagesContainer]}>
                            <Text style={styles.moreImagesText}>+{images.length - 4}</Text>
                        </View>
                    )}
                </View>
            </View>

            <View style={styles.productDetailsContainer}>
                <View style={styles.productCategory}>
                    <Text style={TEXT.caption}>Female's Style</Text>
                    <Text>Shirt</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    imagesListContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        // width: '90%',
        height: 60,
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    imageListContainer: {
        width: 52,
        height: 52,
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal: 4,
    },
    imageList: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    moreImagesContainer: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    moreImagesText: {
        color: 'white',
        fontWeight: 'bold',
    },
    productDetailsContainer: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
        marginTop: 32,
        paddingHorizontal: 32,
    },
    productCategory: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
});