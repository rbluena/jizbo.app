import { STATUSES } from '@app/constants';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ActiveStatus = ({ status = 'offline' }) => (
  <View
    style={[styles.container, { backgroundColor: STATUSES[status]?.color }]}
  />
);

ActiveStatus.defaultProps = {
  status: 'offline',
};

ActiveStatus.propTypes = {
  status: PropTypes.oneOf(['online', 'offline']),
};

export default ActiveStatus;

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 50,
    elevation: 2,
    borderColor: 'grey',
    borderWidth: 1,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
