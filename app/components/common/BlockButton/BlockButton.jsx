import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '~/app/styles/theme';

const BlockButton = ({
  textLabel,
  showLoader,
  style = {},
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {
          backgroundColor: disabled
            ? COLORS.button.slate.disabledBackground
            : COLORS.button.primary.background,
        },
      ]}
      disabled={disabled}
      {...props}>
      {showLoader ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.label}>{textLabel}</Text>
      )}
    </TouchableOpacity>
  );
};

BlockButton.defaultProps = {
  showLoader: false,
  style: {},
  disabled: false,
};

BlockButton.propTypes = {
  showLoader: PropTypes.bool,
  textLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.any,
};

export default BlockButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
    alignSelf: 'stretch',
    minWidth: 250,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.button.slate.color,
  },
});
