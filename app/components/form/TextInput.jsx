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
  style = {},
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      {iconName?.length ? (
        <MaterialIcons
          name={iconName}
          size={24}
          color={COLORS.input.iconColor}
          style={{ marginLeft: 16 }}
        />
      ) : null}
      <Input
        style={[styles.input, style]}
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
  style: {},
};

TextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  style: PropTypes.any,
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    padding: 8,
    backgroundColor: COLORS.input.backgroundColor,
    borderColor: COLORS.input.borderColor,
    textAlign: 'center',
    elevation: 2,
    borderRadius: 4,
    // width: '100%',
    // alignSelf: 'stretch',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  input: {
    fontSize: 18,
  },
});
