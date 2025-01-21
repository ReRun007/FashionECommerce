import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity 
        style={styles.searchBar}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Search')}
      >
        <Ionicons name="search-outline" size={20} color={COLORS.primary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={COLORS.textSecondary}
          editable={false} 
          pointerEvents="none" 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.filterButton} 
        onPress={() => navigation.navigate('Search')}
      >
        <Ionicons name="options-outline" size={20} color={COLORS.background} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 46,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 23,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;