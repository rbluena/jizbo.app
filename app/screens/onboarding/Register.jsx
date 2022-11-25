import { SCREEN } from '@app/constants';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  ActivityIndicator,
  TextInput,
  Pressable,
} from 'react-native';
import ScreenHeader from '~/app/components/common/ScreenHeader/ScreenHeader';
import { toastMessage } from '~/app/utils/message';

import TextComponent from '@app/components/common/Text';
import { PhoneInput } from '@app/components/form';

import * as theme from '@app/styles/theme';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  /**
   *
   */
  const signInWithPhoneNumber = () => {
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmation => {
        setConfirm(confirmation);
        setShowVerificationInput(true);
        setIsLoading(false);
      })
      .catch(() => {
        setConfirm(null);
        setShowVerificationInput(false);
        setIsLoading(false);
      });
  };

  /**
   *
   * @returns void
   */
  const handleSubmit = () => {
    setIsLoading(true);

    //  We have already received the code, now user
    // has to verify the code.
    if (showVerificationInput) {
      if (code.length <= 2) {
        toastMessage('Please enter verification code from the message!');
        setIsLoading(false);
        return;
      }

      confirm
        ?.confirm(code)
        .then(() => navigation.navigate('Account'))
        .catch(() => {
          toastMessage('Invalid verification code, please try again!');
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }

    // This is initial stage before the process above.
    // Here we request verification code after receiving the contact.
    if (!phoneInput.current?.isValidNumber(phoneNumber)) {
      Alert.alert('Error', 'The phone number entered is not valid!');
      setIsLoading(false);
      return;
    }

    //
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
          onPress: () => {
            signInWithPhoneNumber();
          },
        },
      ],
    );
  };

  /**
   *
   */
  const resetVerification = () => {
    setCode('');
    setConfirm(null);
    setShowVerificationInput(false);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ScreenHeader
          textHeading="Get started"
          textSubheading="Register your phone"
        />

        <View style={{ marginTop: 32 }}>
          {!showVerificationInput ? (
            <>
              <PhoneInput
                defaultValue={phoneNumber}
                onChange={text => setPhoneNumber(text)}
                ref={phoneInput}
              />
              <TextComponent
                align="center"
                variant="muted"
                style={{ marginTop: 8 }}>
                Your phone number will never be seen or shared on public. We
                need to verify you.
              </TextComponent>
            </>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <TextInput
                placeholder="Enter code"
                style={{
                  marginTop: 8,
                  padding: 8,
                  backgroundColor: theme.COLORS.input.backgroundColor,
                  borderColor: theme.COLORS.input.borderColor,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  elevation: 2,
                  borderRadius: 4,
                  width: 200,
                }}
                value={code}
                onChangeText={text => setCode(text)}
              />
              <Pressable onPress={resetVerification} style={{ padding: 16 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'blue',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textDecorationColor: 'underline',
                  }}>
                  Try again
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>

      <View>
        <Pressable
          style={[styles.blockButton]}
          onPress={handleSubmit}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              {showVerificationInput ? 'Verify' : 'Get verification code'}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.container.background,
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN.width * 0.1,
  },
  topContainer: {},
  header: {},
  blockButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
  },
});
