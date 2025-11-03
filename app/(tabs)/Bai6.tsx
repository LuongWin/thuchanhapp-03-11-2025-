// screens/Bai6.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Bai6() {
  const [bgColor, setBgColor] = useState('#ADD8E6');

  const changeColor = () => {
    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBgColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>Tap the button to change color</Text>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Change Color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
