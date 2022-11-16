import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import Avatar from '@app/components/common/Avatar';
import TextComponent from '@app/components/common/Text';

import { COLORS, SPACING } from '@app/styles/theme';

const Badge = ({ children }) => <View style={styles.badge}>{children}</View>;

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar />

        <View style={{ paddingLeft: SPACING.s }}>
          <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
            Rabii Luena{' '}
            <MaterialIcons name="verified" size={20} color="black" />
          </TextComponent>
          <TextComponent variant="muted" style={{ marginBottom: 8 }}>
            Software Engineer
          </TextComponent>

          {/* <Badge>
            <TextComponent
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}>
              KES 3540/Min
            </TextComponent>
          </Badge> */}
        </View>
      </View>

      <View
        style={{
          paddingLeft: SPACING.s,
          paddingTop: SPACING.m,
          flexDirection: 'row',
          flexBasis: 'auto',
        }}>
        <Badge>
          <TextComponent
            align="center"
            style={{ color: 'white', fontWeight: 'bold' }}>
            KES 540/Min
          </TextComponent>
        </Badge>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            backgroundColor: 'green',
            padding: 4,
            width: '250',
          }}>
          {/* <Badge>
            <TouchableHighlight>
              <MaterialIcons name="call" size={20} color="white" />
            </TouchableHighlight>
          </Badge>
          <Badge>
            <TouchableHighlight>
              <MaterialIcons name="videocam" size={18} color="white" />
            </TouchableHighlight>
          </Badge> */}
        </View>
        {/* <Badge>
          <TextComponent
            align="center"
            style={{ color: 'white', fontWeight: 'bold' }}>
            03:
          </TextComponent>
        </Badge> */}
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
  badge: {
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 4,
  },
});
