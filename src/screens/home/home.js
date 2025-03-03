import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput, Dimensions, FlatList } from 'react-native';
import { COLORS } from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/product/searchBar';
import TabBar from '../../components/product/tabBar';
import Products from '../../components/product/products';

const { width } = Dimensions.get('window');

export default function Home({ route, navigation }) {
  const { address, addressDetails } = route.params ?? { 
    address: 'กรุณาเลือกที่อยู่',
    addressDetails: null
  };
  const [selectedTab, setSelectedTab] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef(null);

  // ข้อมูล Banner
  const banners = [
    {
      id: '1',
      image: require('../../assets/images/banner.png'),
      title: 'New Collection',
      subtitle: 'Discount 50% for the first transaction'
    },
    {
      id: '2',
      image: require('../../assets/images/banner.png'),
      title: 'Summer Sale',
      subtitle: 'Get up to 70% off on summer items'
    },
    {
      id: '3',
      image: require('../../assets/images/banner.png'),
      title: 'Special Offer',
      subtitle: 'Free shipping on orders over $50'
    }
  ];

  // ข้อมูลจำลองสำหรับ Category
  const categories = [
    { id: 1, name: 'T-Shirt', icon: require('../../assets/icons/tshirt.png') },
    { id: 2, name: 'Pant', icon: require('../../assets/icons/pant.png') },
    { id: 3, name: 'Dress', icon: require('../../assets/icons/dress.png') },
    { id: 4, name: 'Jacket', icon: require('../../assets/icons/jacket.png') },
  ];

  // ข้อมูลจำลองสำหรับ Flash Sale
  const flashSaleItems = [
    {
      id: 1,
      name: 'Brown Jacket',
      price: 83.97,
      rating: 4.9,
      image: require('../../assets/images/product1.png')
    },
    {
      id: 2,
      name: 'Brown Suite',
      price: 120.00,
      rating: 5.0,
      image: require('../../assets/images/product2.png')
    },
    {
      id: 3,
      name: 'Brown Jacket',
      price: 83.97,
      rating: 4.9,
      image: require('../../assets/images/product3.png')
    },
    {
      id: 4,
      name: 'Yellow Shirt',
      price: 120.00,
      rating: 5.0,
      image: require('../../assets/images/product4.png')
    },
  ];

  const renderBannerItem = ({ item }) => (
    <View style={styles.bannerContainer}>
      <Image
        source={item.image}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setActiveSlide(index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Location */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('EnterLocation')}>
          <Ionicons name="location" size={24} color={COLORS.primary} />
          <Text style={styles.locationText} numberOfLines={2}>{address}</Text>
          <Ionicons name="chevron-down" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Sliding Banners */}
      <View>
        <FlatList
          ref={flatListRef}
          data={banners}
          renderItem={renderBannerItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          snapToAlignment="center"
          decelerationRate="fast"
        />
        <View style={styles.pagination}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeSlide && styles.paginationDotActive
              ]}
            />
          ))}
        </View>
      </View>

      {/* Rest of the content remains the same */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.categoryIconContainer}>
              <Image source={category.icon} style={styles.categoryIcon} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Flash Sale</Text>
        <View style={styles.timerContainer}>
          <Text style={styles.closingText}>Closing in:</Text>
          <Text style={styles.timerText}>02 : 12 : 56</Text>
        </View>
      </View>

      <TabBar
        tabs={['All', 'Newest', 'Popular', 'Man', 'Woman', 'Kids']}
        selectedTab={selectedTab}
        onTabPress={setSelectedTab}
      />

      <Products items={flashSaleItems} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 24,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    maxWidth: width * 0.4,
    ellipsizeMode: 'tail'
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    width: width - 32,
    height: 180,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    position: 'absolute',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textInverse,
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: COLORS.textInverse,
    marginBottom: 16,
  },
  shopNowButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: COLORS.textInverse,
    fontSize: 14,
    fontWeight: '500',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: COLORS.primary,
  },
  // Rest of the styles remain the same...
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.textLink,
  },
  categoriesContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    width: 36,
    height: 36,
    tintColor: COLORS.primary,
  },
  categoryName: {
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  closingText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  timerText: {
    fontSize: 12,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
});