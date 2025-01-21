import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { COLORS } from '../../constants/colors';
import Button from '../../components/common/button';
import TextLink from '../../components/common/textLink';
import { useLocation } from '../../hooks/useLocation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function LocationScreen({ navigation }) {
    const { loading, location, address, requestLocationPermission } = useLocation();
    const [showModal, setShowModal] = useState(false);
    

    const handleAllowLocation = async () => {
        const granted = await requestLocationPermission();
        if (granted) {
            setShowModal(true);
        }
    };

    const handleEnterManually = () => {
        navigation.navigate('EnterLocation');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmLocation = () => {
        setShowModal(false);
        setTimeout(() => {
            navigation.navigate('MainApp', {
                screen: 'Home',
                params: {
                    screen: 'MainHome',
                    params: { address: address }
                }
            });
        }, 300); 
    };

    const mapRegion = location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    } : null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconCircle}>
                        <Ionicons name="location" size={32} color={COLORS.primary} />
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
                    loading={loading}
                    disabled={loading}
                />
                <TextLink
                    text="Enter Location Manually"
                    onPress={handleEnterManually}
                    style={styles.manualLink}
                />
            </View>

            {/* Map Modal */}
            <Modal
                visible={showModal && !!location}
                transparent
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.mapCard}>
                        <View style={styles.mapHeader}>
                            <Text style={styles.addressText} numberOfLines={2}>
                                {address || 'Current Location'}
                            </Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleCloseModal}
                            >
                                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
                            </TouchableOpacity>
                        </View>
                        {mapRegion && (
                            <MapView
                                style={styles.map}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={mapRegion}
                                region={mapRegion}
                                scrollEnabled={false}
                                zoomEnabled={false}
                                rotateEnabled={false}
                                pitchEnabled={false}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: location.coords.latitude,
                                        longitude: location.coords.longitude,
                                    }}
                                />
                            </MapView>
                        )}
                        <View style={styles.confirmButton}>
                            <Button
                                title="Confirm Location"
                                onPress={handleConfirmLocation}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 18,
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
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    mapCard: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        overflow: 'hidden',
    },
    mapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    addressText: {
        flex: 1,
        fontSize: 16,
        color: COLORS.textPrimary,
        marginRight: 16,
    },
    closeButton: {
        padding: 4,
    },
    map: {
        width: '100%',
        height: 200,
    },
    confirmButton: {
        marginHorizontal: 16,
    },
});