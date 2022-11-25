import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS } from '~/app/styles/theme';

import Avatar from '../Avatar';

const SquareContactCard = ({ userName, occupation, photoURL }) => {
  return (
    <View style={styles.container}>
      <Avatar uri={photoURL} initial={userName[0]} rounded />
      <View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.occupation}>{occupation}</Text>
      </View>
    </View>
  );
};

export default SquareContactCard;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  occupation: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.header.subheading,
  },
});
