import { SCREEN } from '@app/constants';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Button from '@app/components/common/Button';
import TextComponent from '@app/components/common/Text';
import PhoneInput from '@app/components/form/PhoneInput';

import * as theme from '@app/styles/theme';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const phoneInput = useRef(null);

  const handleSubmit = () => {
    if (!phoneInput.current?.isValidNumber(phoneNumber)) {
      Alert.alert('Error', 'The phone number entered is not valid!');
      return;
    }

    Alert.alert(
      'Confirm the phone',
      `A verification code will be sent to: ${phoneNumber}`,
      [
        {
          text: 'Edit number',
          onPress: () => false,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () =>
            console.log('Now sending the phone number outside!'),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <TextComponent align="center">Get started</TextComponent>
          <TextComponent align="center">
            Your phone number will never be seen or shared in public even during
            the call. We only need it for verification purpose.
          </TextComponent>
        </View>

        <View>
          <PhoneInput
            defaultValue={phoneNumber}
            onChange={text => setPhoneNumber(text)}
            ref={phoneInput}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Button label="Next" variant="primary" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.container.background,
    alignItems: 'center',
    padding: SCREEN.width * 0.1,
  },
  topContainer: {
    // height: SCREEN.height * 0.7,
  },
  header: {
    // flex: 0.15,
  },
  footer: {},
});
