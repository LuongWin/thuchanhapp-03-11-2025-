// screens/Bai2.js
import { View, Text, StyleSheet } from 'react-native';

export default function Bai2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Xin chao React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E90FF', 
  },
});
