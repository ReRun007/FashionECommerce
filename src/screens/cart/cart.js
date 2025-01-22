import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/button';
import { useState } from 'react';

export default function CartScreen({ navigation }) {

  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      // Logic สำหรับการ verify code
      await new Promise(resolve => setTimeout(resolve, 2000)); // จำลองการรอ
      navigation.navigate('MainApp');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
      <Button
        title="Button"
        onPress={handleVerify}
        loading={isLoading}
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