import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import TextLink from '../../components/common/textLink';
import { COLORS } from '../../constants/colors';
import Checkbox from 'expo-checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GoogleLogo from '../../components/common/googleLogo';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Fill your information below or register{'\n'}with your social account.</Text>
            </View>

            <View style={styles.form}>
                <Input
                    label="Name"
                    value={name}
                    onChangeText={setName}
                    placeholder=" Name"
                />

                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••••••••"
                    isPassword
                />

                <TouchableOpacity
                    style={styles.termsContainer}
                    onPress={() => setAgreeToTerms(!agreeToTerms)}
                >
                    <Checkbox
                        value={agreeToTerms}
                        onValueChange={setAgreeToTerms}
                        style={styles.checkbox}
                        color={agreeToTerms ? COLORS.primary : undefined}
                    />
                    <Text style={styles.termsText}>
                        Agree with
                    </Text>
                    <TextLink text="Terms & Condition" onPress={() => { }} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Sign Up"
                        // onPress={() => navigation.navigate('MainApp')}
                        onPress={() => navigation.navigate('Verify')}
                    />
                </View>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or sign up with</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="apple" size={24} color={COLORS.textPrimary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <GoogleLogo size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="facebook" size={24} color="#1877F2" />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TextLink
                        text="Sign In"
                        onPress={() => navigation.navigate('Login')}
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
    form: {
        flex: 1,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    checkbox: {
        borderColor: COLORS.border,
        borderRadius: 5,
        marginRight: 8,
    },
    termsText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        marginRight: 5,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    dividerText: {
        color: COLORS.textSecondary,
        paddingHorizontal: 16,
        fontSize: 14,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 100,
    },
    footerText: {
        color: COLORS.textSecondary,
        fontSize: 14,
    }
});