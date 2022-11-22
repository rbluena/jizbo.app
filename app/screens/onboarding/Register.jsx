import { SCREEN } from '@app/constants';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import ScreenHeader from '~/app/components/common/ScreenHeader/ScreenHeader';

import TextComponent from '@app/components/common/Text';
import PhoneInput from '@app/components/form/PhoneInput';

import * as theme from '@app/styles/theme';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const phoneInput = useRef(null);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!phoneInput.current?.isValidNumber(phoneNumber)) {
      Alert.alert('Error', 'The phone number entered is not valid!');
      return;
    }

    setIsLoading(true);

    Alert.alert(
      'Confirm the phone',
      `A verification code will be sent to: ${phoneNumber}`,
      [
        {
          text: 'Edit number',
          onPress: () => {
            setIsLoading(false);
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            setIsLoading(false);
            setShowVerificationInput(true);
            navigation.navigate('Account');
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ScreenHeader
          textHeading="Get started"
          textSubheading="Register your phone"
        />

        <View style={{ marginTop: 32 }}>
          <PhoneInput
            defaultValue={phoneNumber}
            onChange={text => setPhoneNumber(text)}
            ref={phoneInput}
          />

          <TextComponent
            align="center"
            variant="muted"
            style={{ marginTop: 8 }}>
            Your phone number will never be seen or shared on public. We need to
            verify you.
          </TextComponent>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.blockButton]}
          onPress={handleSubmit}
          // disabled
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              {showVerificationInput ? 'Verify' : 'Get verification code'}
            </Text>
          )}
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN.width * 0.1,
  },
  topContainer: {},
  header: {},
  footer: {
    width: SCREEN.width,
    justifyContent: 'flex-end',
  },
  blockButton: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: SCREEN.width * 0.1,
    borderRadius: 32,
    marginBottom: 16,
  },
});
