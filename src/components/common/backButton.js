import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={18} color={COLORS.textPrimary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});