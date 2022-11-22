import { SCREEN } from '@app/constants';
import React from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '@app/components/common/Button';
import TextComponent from '@app/components/common/Text';

import * as theme from '@app/styles/theme';

import {
  requestMicrophonePermission,
  requestCameraPermission,
} from '../lib/permissions';

const Landing = () => {
  const nextCallback = () => {
    requestMicrophonePermission()
      .then(requestCameraPermission)
      .then(() => {
        // Go the next page
      })
      .catch(error =>
        Alert.alert('Permission', 'All permissions are granted!'),
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jizbo</Text>
        <TextComponent variant="muted" align="center">
          Let people pay your time to have conversation with you.
        </TextComponent>
      </View>
      <View style={styles.footer}>
        <View style={{}}>
          <Button
            variant="primary"
            label="Continue"
            onPress={nextCallback}
            style={{}}
          />
        </View>

        <TextComponent variant="muted">
          By tapping continue button, you agree and accept our
        </TextComponent>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://jizbo.vercel.app/terms-and-policy')
          }>
          <TextComponent style={{ color: 'blue' }}>
            Terms & Privacy Policy
          </TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.container.background,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    width: SCREEN.width,
    height: SCREEN.height * 0.6,
    paddingTop: SCREEN.height * 0.1,
    paddingHorizontal: SCREEN.width * 0.1,
  },
  headerTitle: {
    fontSize: theme.FONT_SIZE.xxxl,
    color: theme.COLORS.header.title,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  footer: {
    width: SCREEN.width,
    height: SCREEN.height * 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SCREEN.height * 0.08,
  },
});
