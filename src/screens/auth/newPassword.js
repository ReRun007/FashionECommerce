import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import BackButton from '../../components/common/backButton';

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different{'\n'}from previously used passwords.
        </Text>
      </View>

      <View style={styles.form}>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••••••••"
          isPassword
        />

        <Input
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="••••••••••••••"
          isPassword
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Create New Password"
            onPress={() => {
              // เพิ่มตรวจสอบ password และ confirmPassword ตรงกัน
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
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
  form: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});