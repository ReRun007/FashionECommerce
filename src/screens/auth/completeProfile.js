import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import BackButton from '../../components/common/backButton';

export default function CompleteProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+66');
  const [gender, setGender] = useState('');
  
  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>
          Don't worry, only you can see your personal{'\n'}
          data. No one else will be able to see it.
        </Text>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color={COLORS.textSecondary} />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color={COLORS.background} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <Input
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder=" Name"
        />

        <View style={styles.phoneInput}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneInputRow}>
            <TouchableOpacity style={styles.countryCodeInput}>
              <Text style={styles.countryCodeText}>{countryCode}</Text>
              <Ionicons name="chevron-down" size={16} color={COLORS.textPrimary} />
            </TouchableOpacity>
            <View style={styles.numberInput}>
              <TextInput
                style={styles.phoneNumberInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter Phone Number"
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
              dropdownIconColor={COLORS.textPrimary}
            >
              <Picker.Item 
                label="Select" 
                value="" 
                style={styles.pickerPlaceholder}
              />
              {genderOptions.map((option) => (
                <Picker.Item 
                  key={option} 
                  label={option} 
                  value={option}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Complete Profile"
            onPress={() => navigation.navigate('Location')}
          />
        </View>
      </View>
    </ScrollView>
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
  },
  phoneInput: {
    marginBottom: 20,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 90,
  },
  countryCodeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    height: '50%',
    minWidth: 80,
    gap: 4,
  },
  countryCodeText: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  numberInput: {
    flex: 1,
  },
  phoneNumberInput: {
    height: 48,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  label: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 90,
    overflow: 'hidden',
    backgroundColor: COLORS.background,
  },
  picker: {
    height: 48,
  },
  pickerPlaceholder: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  pickerItem: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});