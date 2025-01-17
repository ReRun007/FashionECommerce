import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import Button from '../../components/common/button';
import TextLink from '../../components/common/textLink';

export default function LocationScreen({ navigation }) {
  const [locationAccess, setLocationAccess] = useState(false);

  const handleAllowLocation = () => {
    // Request location permission here
    setLocationAccess(true);
    navigation.navigate('Login');
  };

  const handleEnterManually = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <View style={styles.locationPin} />
          </View>
        </View>
        <Text style={styles.title}>What is Your Location?</Text>
        <Text style={styles.subtitle}>
          We need to know your location in order to suggest{'\n'}nearby services.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Allow Location Access"
          onPress={handleAllowLocation}
        />
        <TextLink
          text="Enter Location Manually"
          onPress={handleEnterManually}
          style={styles.manualLink}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPin: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    borderWidth: 6,
    borderColor: COLORS.primaryLight,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  manualLink: {
    marginTop: 16,
    textAlign: 'center',
  },
});