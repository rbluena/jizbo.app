import { SCREEN } from '@app/constants';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  requestMicrophonePermission,
  requestCameraPermission,
} from '~/app/lib/permissions';

import TextComponent from '@app/components/common/Text';

import * as theme from '@app/styles/theme';

const Landing = () => {
  const navigation = useNavigation();

  const nextPageHandler = () => {
    requestMicrophonePermission()
      .then(requestCameraPermission)
      .then(() => {
        navigation.navigate('Register');
      })
      .catch(() =>
        Alert.alert('Permission', 'All permission should be granted!'),
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jizbo</Text>
        <TextComponent variant="muted" align="center">
          Let people pay your minutes to have conversation with you.
        </TextComponent>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.blockButton} onPress={nextPageHandler}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Continue
          </Text>
        </TouchableOpacity>

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

        <TextComponent
          variant="muted"
          style={{ fontWeight: 'bold', marginTop: 16, fontSize: 18 }}>
          Busara Company
        </TextComponent>
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
