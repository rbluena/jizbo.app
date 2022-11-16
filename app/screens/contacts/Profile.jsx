import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from '~/app/components/common/Text/Text';
import { SCREEN } from '~/app/constants';
import { SPACING } from '~/app/styles/theme';

import Avatar from '@app/components/common/Avatar';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Avatar />

        <View style={{ paddingLeft: SPACING.s }}>
          <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
            Rabii Luena
          </TextComponent>
          <TextComponent>Software Engineer</TextComponent>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN.width * 0.1,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
