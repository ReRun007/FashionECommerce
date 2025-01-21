// components/common/searchInput.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';

const SearchInput = ({
  value,
  onChangeText,
  placeholder = "Search",
  editable = true,
  showClearButton = true,
  onClear,
  containerStyle,
  onPress,
}) => {
  const inputProps = editable
    ? {
        value,
        onChangeText,
      }
    : {
        pointerEvents: "none",
        editable: false,
      };

  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={[styles.container, containerStyle]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Icon 
        name="search-outline" 
        size={20} 
        color={COLORS.textSecondary} 
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        {...inputProps}
      />
      {showClearButton && value && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Icon name="close-circle" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    height: '100%',
    padding: 0,
  },
  clearButton: {
    marginLeft: 8,
    padding: 4,
  },
});

export default SearchInput;