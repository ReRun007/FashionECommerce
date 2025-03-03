import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';

const HeartButton = ({ liked  = false, onPress, style }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handlePress = () => {
    setIsLiked(!isLiked);
    if (onPress) {
      onPress(!isLiked);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={isLiked ? 'heart' : 'heart-outline'}
        size={20}
        color={isLiked ? COLORS.buttonPrimary : COLORS.textPrimary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    borderRadius: 90,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 4,
  }
});




export default HeartButton;