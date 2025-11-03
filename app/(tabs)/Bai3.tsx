// screens/Bai3.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Bai3() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Hello React Native</Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#61DBFB', 
  },
});
