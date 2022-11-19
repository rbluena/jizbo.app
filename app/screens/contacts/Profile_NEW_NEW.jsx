import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Badge from '~/app/components/common/Badge';

import Avatar from '@app/components/common/Avatar';
import TextComponent from '@app/components/common/Text';

import { SPACING, COLORS } from '@app/styles/theme';

const Profile = () => (
  <View style={styles.container}>
    <View style={styles.profileHeader}>
      <Avatar
        onlineStatus="online"
        size="l"
        isEditable
        rounded={false}
        uri="https://i.pravatar.cc/150?img=49"
      />

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
        <Badge>KES 500/Min</Badge>
      </View>
    </View>

    {/* start: Avilability for group calls or schedule for a call */}

    {/* end: Avilability for group calls or schedule for a call */}

    <View style={{ flexDirection: 'row', width: '100%' }}>
      <TouchableOpacity
        style={[styles.callingButton, { backgroundColor: 'blue' }]}>
        <MaterialIcons name="call" size={24} color="white" />
        <TextComponent style={{ color: 'white', fontWeight: 'bold' }}>
          Audio
        </TextComponent>
      </TouchableOpacity>
      <View style={{ marginHorizontal: 4 }} />
      <TouchableOpacity
        style={[
          styles.callingButton,
          { backgroundColor: 'black', borderWidth: 1 },
        ]}>
        <MaterialIcons name="videocam" size={24} color="white" />
        <TextComponent style={{ color: 'white', fontWeight: 'bold' }}>
          Video
        </TextComponent>
      </TouchableOpacity>
    </View>

    {/* <View>
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
    </View> */}
  </View>
);

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN.width * 0.05,
    paddingBottom: SCREEN.width * 0.1,
    backgroundColor: COLORS.container.background,
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
    flex: 0.5,
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
