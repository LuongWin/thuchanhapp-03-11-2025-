import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Bai5() {
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const avg = (parseFloat(math) + parseFloat(physics) + parseFloat(chemistry)) / 3;
    setAverage(isNaN(avg) ? 0 : avg.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Average Score Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Math score"
        keyboardType="numeric"
        value={math}
        onChangeText={setMath}
      />

      <TextInput
        style={styles.input}
        placeholder="Physics score"
        keyboardType="numeric"
        value={physics}
        onChangeText={setPhysics}
      />

      <TextInput
        style={styles.input}
        placeholder="Chemistry score"
        keyboardType="numeric"
        value={chemistry}
        onChangeText={setChemistry}
      />

      <Button title="Calculate Average" onPress={calculateAverage} />

      {average !== null && (
        <Text style={styles.result}>Average: {average}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
