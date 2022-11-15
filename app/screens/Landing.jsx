import { SCREEN } from '@app/constants';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '@app/components/common/Button';
import TextComponent from '@app/components/common/Text';

import * as theme from '@app/styles/theme';

import { requestPermissions } from '../utils';

// TODO: Request all permissions at this stage
// TODO: Contact, Receiving SMS, Internet, Audio calls, Video Calls

const Landing = () => {
  const nextCallback = () => {
    requestPermissions();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jizbo</Text>
        <TextComponent size="m" style={{ textAlign: 'center' }}>
          Engaging in calls with prominents people while supporting your
          communities.
        </TextComponent>
      </View>
      <View style={styles.footer}>
        <TextComponent variant="muted">
          By tapping continue button, you agree and accept our
        </TextComponent>
        <TouchableOpacity>
          <TextComponent
            variant="muted"
            onPress={() => Linking.openURL('https://google.com')}>
            Terms of Service & Privacy Policy
          </TextComponent>
        </TouchableOpacity>
        <View>
          <Button variant="primary" label="Continue" onPress={nextCallback} />
        </View>
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
    fontSize: theme.FONT_SIZE.xl,
    color: theme.COLORS.fonts.heading,
  },
  footer: {
    width: SCREEN.width,
    height: SCREEN.height * 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SCREEN.height * 0.08,
  },
});
