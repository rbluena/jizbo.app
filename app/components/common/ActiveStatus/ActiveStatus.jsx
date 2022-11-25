import { STATUSES } from '@app/constants';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ActiveStatus = ({ onlineStatus = 'offline', style = {} }) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: STATUSES[onlineStatus]?.backgroundColor,
        borderColor: STATUSES[onlineStatus]?.borderColor,
      },
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
    width: 18,
    height: 18,
    borderRadius: 20,
    elevation: 3,
    borderColor: 'grey',
    borderWidth: 2,
    zIndex: 10,
  },
});
