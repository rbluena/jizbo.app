import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '@app/styles/theme';

const TextComponent = ({
  children,
  variant,
  style: extStyle = {},
  ...props
}) => {
  const style = {};

  if (variant === 'muted') {
    style.color = COLORS.fonts.muted;
  }
  return (
    <Text style={[styles.container, style, { ...extStyle }]} {...props}>
      {children}
    </Text>
  );
};

TextComponent.defaultProps = {
  variant: 'primary',
  style: {},
};

TextComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'muted']),
  style: PropTypes.objectOf({}),
};

export default TextComponent;

const styles = StyleSheet.create({
  container: {},
});
