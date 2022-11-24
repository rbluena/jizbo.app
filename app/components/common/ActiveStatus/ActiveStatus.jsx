import { STATUSES } from '@app/constants';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ActiveStatus = ({ onlineStatus = 'offline', style = {} }) => (
  <View
    style={[
      styles.container,
      { backgroundColor: STATUSES[onlineStatus]?.color },
      style,
    ]}
  />
);

ActiveStatus.defaultProps = {
  onlineStatus: 'offline',
  style: {},
};

ActiveStatus.propTypes = {
  style: PropTypes.any,
  onlineStatus: PropTypes.oneOf(['online', 'offline']),
};

export default ActiveStatus;

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 20,
    elevation: 2,
    borderColor: 'grey',
    borderWidth: 1,
    zIndex: 10,
  },
});
