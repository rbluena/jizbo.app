import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Avatar from '@app/components/common/Avatar';
import TextComponent from '@app/components/common/Text';

import { SPACING } from '@app/styles/theme';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar onlineStatus="online" />

        <View style={{ paddingLeft: SPACING.s }}>
          <View style={styles.userTitle}>
            <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
              Rabii Luena{' '}
            </TextComponent>
            <MaterialIcons name="verified" size={20} color="blue" />
          </View>
          <TextComponent variant="muted" style={{ marginBottom: 8 }}>
            Software Engineer
          </TextComponent>
        </View>
      </View>

      {/* start: Avilability for group calls or schedule for a call */}

      {/* end: Avilability for group calls or schedule for a call */}

      <View>
        <TouchableOpacity
          onPress={() => console.log('Calling audio...')}
          style={[styles.callingButton, { backgroundColor: 'blue' }]}>
          <MaterialIcons name="call" size={28} color="white" />
          <TextComponent style={{ color: 'white', fontWeight: 'bold' }}>
            KES 220/Min
          </TextComponent>
        </TouchableOpacity>
        <View style={{ marginVertical: 4 }} />
        <TouchableOpacity
          onPress={() => console.log('Calling video..')}
          style={[styles.callingButton, { backgroundColor: 'black' }]}>
          <MaterialIcons name="videocam" size={28} color="white" />
          <TextComponent style={{ color: 'white', fontWeight: 'bold' }}>
            KES 540/Min
          </TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN.width * 0.1,
    justifyContent: 'space-between',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 8,
  },
  callCard: {
    marginRight: 4,
    borderRadius: 8,
    width: SCREEN.width * 0.6,
    padding: 4,
    backgroundColor: 'white',
    elevation: 2,
  },
});
