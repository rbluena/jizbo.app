import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, TextInput as Input } from 'react-native';
import { COLORS, FONT_SIZE, SPACING } from '~/app/styles/theme';

const TextInput = ({
  placeholder,
  value,
  onChange,
  iconName = '',
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      {iconName?.length ? (
        <MaterialIcons
          name={iconName}
          size={24}
          color={COLORS.input.iconColor}
        />
      ) : null}
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
  iconName: '',
  placeholder: '',
  value: '',
};

TextInput.propTypes = {
  iconName: PropTypes.string,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
  },
  input: {
    padding: SPACING.s,
    fontSize: FONT_SIZE.m,
  },
});
