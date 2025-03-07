import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import Button from '../../components/common/button';
import BackButton from '../../components/common/backButton';
import TextLink from '../../components/common/textLink';

export default function Verify({ route, navigation }) {
  const email = route.params?.email || 'example@email.com';
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Please enter the code we just sent to email{'\n'}{email}
        </Text>
      </View>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <View key={index} style={styles.inputContainer}>
            {!digit && <Text style={styles.dash}>-</Text>}
            <TextInput
              ref={ref => inputRefs.current[index] = ref}
              style={[styles.codeInput, !digit && styles.transparentText]}
              value={digit}
              onChangeText={text => handleCodeChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive OTP? </Text>
        <TextLink
          text="Resend code"
          onPress={() => { }}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Button
          title="Verify"
          onPress={() => navigation.navigate('CompleteProfile')}
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
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 30,
  },
  inputContainer: {
    width: 65,
    height: 50,
    position: 'relative',
  },
  codeInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.textPrimary,
    padding: 0,
    backgroundColor: 'transparent',
  },
  dash: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: 50,
    color: COLORS.textSecondary,
    fontSize: 18,
    backgroundColor: COLORS.background,
  },
  transparentText: {
    color: 'transparent'
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
});