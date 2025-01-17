import { useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

      // Get address from coordinates
      const [addressResult] = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      if (addressResult) {
        const formattedAddress = `${addressResult.street || ''} ${addressResult.district || ''} ${addressResult.city || ''} ${addressResult.region || ''}`.trim();
        setAddress(formattedAddress);
      }

      return true;
    } catch (err) {
      setError(err.message);
      Alert.alert('Error', 'Failed to get location');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    location,
    address,
    loading,
    error,
    requestLocationPermission,
  };
};