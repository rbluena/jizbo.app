import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { COLORS, SPACING } from '@app/styles/theme';

const Button = ({ label, variant = 'default', style = {}, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        variant === 'primary' ? { ...COLORS.button.primary } : {},
        style,
      ]}
      {...props}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  label: '',
  variant: 'default',
  style: {},
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.s,
    elevation: 1,
  },

  btnLabel: {
    color: COLORS.button.primary.textColor,
  },
});
