import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, TextInput as Input } from 'react-native';
import { FONT_SIZE, SPACING } from '~/app/styles/theme';

const TextInput = ({ placeholder, value, onChange, ...props }) => {
  return (
    <View style={styles.wrapper}>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    </View>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  value: '',
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: COLORS.inputBg,
    borderRadius: SPACING.s,
    borderWidth: 1,
    borderColor: 'white',
  },
  input: {
    padding: SPACING.s,
    fontSize: FONT_SIZE.m,
  },
});
