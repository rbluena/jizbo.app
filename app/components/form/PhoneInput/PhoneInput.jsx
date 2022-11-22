import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInputComponent from 'react-native-phone-input';
import { COLORS } from '~/app/styles/theme';

const PhoneInput = forwardRef(
  ({ initialValue = '', initialCountry = 'us', onChange, ...props }, ref) => {
    return (
      <PhoneInputComponent
        initialValue={initialValue}
        initialCountry={initialCountry}
        style={styles.container}
        textStyle={styles.textStyle}
        onChangePhoneNumber={onChange}
        ref={ref}
        {...props}
        onPressFlag={() => {}}
        autoFormat
        autoFocus
      />
    );
  },
);

PhoneInput.defaultProps = {
  initialCountry: 'us',
  initialValue: '',
};

PhoneInput.propTypes = {
  initialCountry: PropTypes.string,
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.input.backgroundColor,
    width: 280,
    height: 50,
    padding: 8,
    marginTop: 16,
    borderColor: COLORS.input.borderColor,
    borderRadius: 4,
    shadowColor: 'ragba(0, 0, 0, 0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.21,
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 16,
  },
});
