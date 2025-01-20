import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import BackButton from '../../components/common/backButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EnterLocationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header with back button */}
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.title}>Enter Your Location</Text>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color={COLORS.textSecondary} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={COLORS.textSecondary}
                />
                <TouchableOpacity style={styles.clearButton}>
                    <Icon name="close-circle" size={20} color={COLORS.textSecondary} />
                </TouchableOpacity>
            </View>

            {/* Current Location Button */}
            <TouchableOpacity style={styles.currentLocationButton}>
                <Image
                    source={require('../../assets/icons/navigation.png')}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.primary
                    }}
                    resizeMode="contain"
                />
                <Text style={styles.currentLocationText}>Use my current location</Text>
            </TouchableOpacity>

            {/* Search Results Section */}
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsHeader}>SEARCH RESULT</Text>

                <TouchableOpacity style={styles.resultItem}>
                    <Image
                        source={require('../../assets/icons/navigation.png')}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.primary
                        }}
                        resizeMode="contain"
                    />
                    <View style={styles.resultTextContainer}>
                        <Text style={styles.resultTitle}>Golden Avenue</Text>
                        <Text style={styles.resultSubtitle}>8502 Preston Rd. Ingl..</Text>
                    </View>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        gap: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 90,
        paddingHorizontal: 16,
        height: 48,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: COLORS.textPrimary,
    },
    clearButton: {
        padding: 4,
    },
    currentLocationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    currentLocationText: {
        fontSize: 14,
        color: COLORS.textPrimary,
    },
    resultsContainer: {
        marginTop: 24,
    },
    resultsHeader: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginBottom: 16,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    resultTextContainer: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 14,
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    resultSubtitle: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
});