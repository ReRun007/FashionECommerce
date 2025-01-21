import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { COLORS } from '../../constants/colors';
import BackButton from '../../components/common/backButton';
import SearchInput from '../../components/common/searchInput';
import { useLocation } from '../../hooks/useLocation';
import Button from '../../components/common/button';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function EnterLocationScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [showMap, setShowMap] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const { loading, location, address, requestLocationPermission, updateLocation } = useLocation();

    useEffect(() => {
        const getInitialLocation = async () => {
            if (showMap) {  // เช็คว่าเปิด modal แผนที่แล้ว
                const granted = await requestLocationPermission();
                if (granted && location) {
                    setSelectedLocation({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        address: address
                    });
                }
            }
        };
        getInitialLocation();
    }, [showMap]);


    const handleConfirmLocation = () => {
        if (selectedLocation && selectedLocation.address) {
            console.log('Selected Location:', selectedLocation.address,'And', selectedLocation.address.formattedAddress );
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'MainApp',
                        params: {
                            screen: 'Home',
                            params: {
                                screen: 'MainHome',
                                params: {
                                    address: selectedLocation.address.formattedAddress,  // ใช้ formattedAddress
                                    addressDetails: selectedLocation.address  // ส่ง object ทั้งหมดไปด้วย
                                }
                            }
                        }
                    }
                ]
            });
        }
    };

    return (
        <View style={styles.container}>
            {/* Header with back button */}
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.title}>Enter Your Location</Text>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <SearchInput
                    value={searchText}
                    onChangeText={setSearchText}
                    onClear={() => setSearchText('')}
                    placeholder="Search location"
                />
            </View>

            <TouchableOpacity
                style={styles.selectOnMapButton}
                onPress={() => setShowMap(true)}
            >
                <Image
                    source={require('../../assets/icons/navigation.png')}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.primary
                    }}
                    resizeMode="contain"
                />
                <Text style={styles.selectOnMapText}>Select on Map</Text>
            </TouchableOpacity>

            {/* Map Modal */}
            <Modal
                visible={showMap}
                animationType="slide"
                style={styles.modal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowMap(false)} style={styles.closeButton}>
                            <Ionicons name="close" size={24} color={COLORS.textPrimary} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Select Location</Text>
                    </View>

                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{
                                latitude: location?.coords?.latitude || 13.7563,  // ใช้ GPS location ถ้ามี ไม่มีใช้ default
                                longitude: location?.coords?.longitude || 100.5018,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                            onRegionChangeComplete={async (region) => {
                                const newAddress = await updateLocation(region);
                                setSelectedLocation({
                                    ...region,
                                    address: newAddress
                                });
                            }}
                        />
                        {/* Fixed Marker at center */}
                        <View style={styles.markerFixed} pointerEvents="none">
                            <FontAwesome name="map-marker" size={24} color={COLORS.primary} />
                        </View>
                    </View>

                    <View style={styles.modalFooter}>
                        {loading ? (
                            <Text style={styles.selectedAddress}>Getting location...</Text>
                        ) : selectedLocation?.address && (
                            <Text style={styles.selectedAddress} numberOfLines={2}>
                                {selectedLocation.address.formattedAddress}
                            </Text>
                        )}
                        <Button
                            title="Confirm Location"
                            onPress={handleConfirmLocation}
                            disabled={loading || !selectedLocation?.address}
                        />
                    </View>
                </View>
            </Modal>

            {/* Search Results Section */}
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsHeader}>SEARCH RESULT</Text>

                <TouchableOpacity
                    style={styles.resultItem}
                >
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
        marginBottom: 16,
    },
    currentLocationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    currentLocationButtonDisabled: {
        opacity: 0.6,
    },
    currentLocationText: {
        fontSize: 14,
        color: COLORS.textPrimary,
    },
    currentLocationTextDisabled: {
        color: COLORS.textSecondary,
    },
    selectOnMapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    selectOnMapText: {
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
    modalContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    closeButton: {
        padding: 4,
        marginRight: 12,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerFixed: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -6,
        marginTop: -20,
        zIndex: 1,
    },
    modalFooter: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        backgroundColor: COLORS.background,
    },
    selectedAddress: {
        fontSize: 14,
        color: COLORS.textPrimary,
        marginBottom: 16,
    },
});