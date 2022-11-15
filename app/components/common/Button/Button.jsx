import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { COLORS, SPACING } from '@app/styles/theme';

let style = {};

const Button = ({ label, variant = 'default', ...props }) => {
  if (variant === 'primary') {
    style = { ...COLORS.button.primary };
  }

  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  label: '',
  variant: 'default',
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.s,
    elevation: 1,
    width: '100%',
  },

  btnLabel: {
    color: COLORS.button.primary.textColor,
  },
});
