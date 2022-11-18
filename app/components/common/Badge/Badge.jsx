import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '~/app/styles/theme';

const Badge = ({ children, style = {}, text = true }) => {
  return (
    <View style={[styles.container, style]}>
      {text ? <Text style={styles.badgeText}>{children}</Text> : children}
    </View>
  );
};

Badge.defaultProps = {
  style: {},
  text: true,
};

Badge.propTypes = {
  style: PropTypes.object,
  text: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.badge.primary.background,
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontWeight: 'bold',
  },
});
