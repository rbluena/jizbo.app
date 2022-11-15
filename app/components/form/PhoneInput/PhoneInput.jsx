import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInputComponent from 'react-native-phone-input';

const PhoneInput = forwardRef(
  ({ initialValue = '', initialCountry = 'us', onChange, ...props }, ref) => {
    return (
      <PhoneInputComponent
        initialValue={initialValue}
        initialCountry={initialCountry}
        style={styles.container}
        onChangePhoneNumber={onChange}
        {...props}
        ref={ref}
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

// const PhoneInput = ({ onChange, initialValue, ...props }) => {
//     const inputRef = useRef(null);

//   return (
//     <PhoneInputComponent
//       initialValue={initialValue}
//       initialCountry="us"
//       style={styles.container}
//       onChangePhoneNumber={onChange}
//       {...props}
//       ref={inputRef}
//       autoFocus
//     />
//   );
// };

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 10,
    width: 280,
    height: 50,
    padding: 4,
  },
});
