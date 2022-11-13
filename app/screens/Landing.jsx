import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const Landing = () => (
  <View style={styles.container}>
    <Text>Landing</Text>
  </View>
);

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
