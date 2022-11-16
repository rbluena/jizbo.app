import { SCREEN } from '@app/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallsHome = () => {
  return (
    <View style={styles.container}>
      <Text>Calls Home</Text>
    </View>
  );
};

export default CallsHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0.1 * SCREEN.width,
  },
});
