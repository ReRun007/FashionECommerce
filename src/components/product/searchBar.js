// components/product/searchBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';
import SearchInput from '../common/searchInput';

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchInput
        containerStyle={styles.searchInputContainer}
        onPress={() => navigation.navigate('Search')}
        placeholder="Search"
        editable={false}
      />
      <TouchableOpacity style={styles.filterButton}>
        <Icon name="options-outline" size={20} color={COLORS.background} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 90,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;