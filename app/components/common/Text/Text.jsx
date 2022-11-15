import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '@app/styles/theme';

const TextComponent = ({
  children,
  variant,
  align = 'left',
  style: extStyle = {},
  ...props
}) => {
  const style = { textAlign: align };

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
  align: 'left',
  variant: 'primary',
  style: {},
};

TextComponent.propTypes = {
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'muted']),
  style: PropTypes.object,
};

export default TextComponent;

const styles = StyleSheet.create({
  container: {},
});
