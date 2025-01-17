// src/components/common/button.js
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function Button({ 
  title, 
  onPress, 
  style, 
  disabled = false,
  loading = false,
  variant = 'primary', // primary, secondary, outline
}) {
  const getButtonStyle = () => {
    if (variant === 'primary') {
      return [styles.button, styles.primaryButton];
    } else if (variant === 'secondary') {
      return [styles.button, styles.secondaryButton];
    } else {
      return [styles.button, styles.outlineButton];
    }
  };

  const getTextStyle = () => {
    if (disabled) {
      return styles.disabledButtonText;
    }
    if (variant === 'primary') {
      return styles.primaryButtonText;
    }
    return styles.secondaryButtonText; // สำหรับทั้ง secondary และ outline
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        disabled && styles.disabledButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? COLORS.textInverse : COLORS.textPrimary} />
      ) : (
        <Text style={[styles.buttonText, getTextStyle()]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '90%',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.buttonPrimary,
  },
  secondaryButton: {
    backgroundColor: COLORS.surfaceLight,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.buttonPrimary,
  },
  disabledButton: {
    backgroundColor: COLORS.buttonDisabled,
    borderColor: COLORS.buttonDisabled,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: COLORS.textInverse,
  },
  secondaryButtonText: {
    color: COLORS.textPrimary,
  },
  disabledButtonText: {
    color: COLORS.textLight,
  },
});