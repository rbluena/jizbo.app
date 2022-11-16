import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';
import { SPACING } from '~/app/styles/theme';

import Avatar from '@app/components/common/Avatar';
import Badge from '@app/components/common/Badge';
import TextComponent from '@app/components/common/Text';

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
            <MaterialIcons name="verified" size={20} color="black" />
          </View>
          <TextComponent variant="muted" style={{ marginBottom: 8 }}>
            Software Engineer
          </TextComponent>
        </View>
      </View>

      <View
        style={{
          paddingLeft: SPACING.s,
          paddingTop: SPACING.m,
          paddingBottom: SPACING.s,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={styles.callingButton}>
            <TouchableOpacity onPress={() => console.log('Calling audio...')}>
              <Badge>
                <MaterialIcons name="call" size={28} color="white" />
              </Badge>
            </TouchableOpacity>
            <TextComponent
              variant="muted"
              style={{ fontWeight: 'bold', marginLeft: 8 }}>
              KES 220/Min
            </TextComponent>
          </View>

          <View style={styles.callingButton}>
            <TextComponent
              variant="muted"
              style={{ fontWeight: 'bold', marginRight: 8 }}>
              KES 540/Min
            </TextComponent>
            <TouchableOpacity onPress={() => console.log('Calling video..')}>
              <Badge>
                <MaterialIcons name="videocam" size={28} color="white" />
              </Badge>
            </TouchableOpacity>
          </View>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callingButton: {
    flexBasis: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
