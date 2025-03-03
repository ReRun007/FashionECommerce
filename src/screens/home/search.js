// screens/search/searchScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/common/backButton';
import SearchInput from '../../components/common/searchInput';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const recentSearches = [
    'Blue Shirt',
    'CosmicChic Jacket',
    'EnchantedElegance Dress',
    'WhimsyWhirl Top',
    'Fluffernova Coat',
    'MirageMelody Cape',
    'BlossomBreeze Overalls',
    'EnchantedElegance Dress',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <SearchInput
          value={searchText}
          onChangeText={setSearchText}
          onClear={() => setSearchText('')}
          autoFocus={true}
        />
      </View>

      {/* Recent Searches */}
      <View style={styles.recentContainer}>
        <View style={styles.recentHeader}>
          <Text style={styles.title}>Recent</Text>
          <TouchableOpacity>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {recentSearches.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.recentItem}
            >
              <View style={styles.recentItemLeft}>
                <Icon name="time-outline" size={20} color={COLORS.textSecondary} />
                <Text style={styles.recentItemText}>{item}</Text>
              </View>
              <TouchableOpacity>
                <Icon name="close-outline" size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    gap: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  recentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  clearAllText: {
    fontSize: 14,
    color: COLORS.textLink,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  recentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recentItemText: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },
});