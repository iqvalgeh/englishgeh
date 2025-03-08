import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Ad = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This Application</Text>
      <Text style={styles.paragraph}>
        This application is built for learning English and Indonesian in the easiest way
        for elementary children up to adults.
      </Text>

      <Text style={styles.heading}>About The Developer</Text>
      <Text style={styles.paragraph}>
        Get in touch with me at <Text style={styles.email}>iqvalef@gmail.com</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  email: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Ad;
