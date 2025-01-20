import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('window');

const Products = ({ items }) => {
  return (
    <View style={styles.productsGrid}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.productCard}>
          <Image source={item.image} style={styles.productImage} />
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart-outline" size={20} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.productDetails}>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={12} color="#FFC107" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
    marginBottom: 100,
  },
  productCard: {
    width: (width - 48) / 2,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});

export default Products;