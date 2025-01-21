import { useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);  // เปลี่ยนเป็นเก็บ object
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAddressFromCoordinates = async (coords) => {
    try {
      const [addressResult] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (addressResult) {
        // สร้าง address object จากผลลัพธ์
        const addressObject = {
          name: addressResult.name,
          street: addressResult.street,
          district: addressResult.district,
          city: addressResult.city,
          region: addressResult.region,
          country: addressResult.country,
          postalCode: addressResult.postalCode,
          formattedAddress: [
            addressResult.street,
            addressResult.district,
            addressResult.city,
            addressResult.region
          ].filter(Boolean).join(', ')
        };

        setAddress(addressObject);
        return addressObject;
      }
      return null;
    } catch (error) {
      console.error('Error getting address:', error);
      return null;
    }
  };

  const requestLocationPermission = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        Alert.alert(
          'Permission Denied',
          'Please allow location access to use this feature'
        );
        return false;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation(currentLocation);
      await getAddressFromCoordinates(currentLocation.coords);
      return true;
    } catch (err) {
      setError(err.message);
      Alert.alert('Error', 'Failed to get location');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = async (coords) => {
    setLocation({
      coords: coords,
      timestamp: Date.now()
    });
    const newAddress = await getAddressFromCoordinates(coords);
    return newAddress;
  };

  return {
    location,
    address,
    loading,
    error,
    requestLocationPermission,
    updateLocation,
  };
};