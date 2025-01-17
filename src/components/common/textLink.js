import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function TextLink({ text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link, style]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: COLORS.textLink,
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textLink,
  },
});