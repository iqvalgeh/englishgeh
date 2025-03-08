import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Rf = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Giving Rating and Feedback 👋{'\n'}{'\n'}
        Your feedback is very valuable!{'\n'}
        Send your feedback to:{'\n'}
        <Text style={styles.email}>iqvalef@gmail.com</Text> 📝{'\n'}{'\n'}
        Don't forget to give a 5-star rating on Google Play!{'\n'}{'\n'}
        <Text style={styles.stars}>⭐⭐⭐⭐⭐ {'\n'}{'\n'}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3, // Shadow effect (Android)
    shadowColor: '#000', // Shadow effect (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  email: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 22,
    color: '#ffcc00',
  },
});

export default Rf;
