import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Badge = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 4,
  },
});
