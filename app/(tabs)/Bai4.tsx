// screens/Bai4.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Bai4() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/avatar.png')} 
          style={styles.avatar}
        />
        <Text style={styles.name}>Luong Toan Thang</Text>
        <Text style={styles.job}>DEV APP</Text>
        <Text style={styles.contact}> ltt@gmail.com</Text>
        <Text style={styles.contact}> 0123 456 789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF6FF',
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, 
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  job: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  },
  contact: {
    fontSize: 14,
    color: '#555',
  },
});
