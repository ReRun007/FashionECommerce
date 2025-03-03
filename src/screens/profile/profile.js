import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/button';

export default function Profile({ navigation }) {

  const logout = () => {
    console.log('Logout');
    navigation.navigate('Auth', { screen: 'Login' });
  }

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button 
      title="Logout" 
      onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});