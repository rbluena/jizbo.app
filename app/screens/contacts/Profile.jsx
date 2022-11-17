import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import Avatar from '@app/components/common/Avatar';
import Badge from '@app/components/common/Badge';
import TextComponent from '@app/components/common/Text';

import { SPACING } from '@app/styles/theme';

// TODO: If prominent/callee is not online, once user press call button should be directed to calender to book for available dates.
const CallCard = () => {
  return (
    <View style={styles.callCard}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextComponent
          variant="muted"
          fontSize="m"
          style={{ fontWeight: 'bold' }}>
          Healthy Lifestyles
        </TextComponent>
        <MaterialIcons
          name="info"
          size={28}
          color="black"
          onPress={() => console.log('Something to be pressed!')}
        />
      </View>
      <TextComponent fontSize="s" style={{ fontWeight: 'bold' }}>
        Wed 23rd, June 2022 - 13:00
      </TextComponent>

      {/* start: People wishing to participate  */}

      {/* end: People wishing to participate  */}
    </View>
  );
};

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
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {/* <View style={styles.callingButton}> */}
          <TouchableOpacity onPress={() => console.log('Calling audio...')}>
            <Badge>
              <MaterialIcons name="call" size={28} color="white" />
              <TextComponent style={{ color: 'white' }}>
                KES 220/Min
              </TextComponent>
            </Badge>
          </TouchableOpacity>
          {/* <TextComponent
              variant="muted"
              style={{ fontWeight: 'bold', marginLeft: 8 }}>
              KES 220/Min
            </TextComponent> */}
          {/* </View> */}

          {/* <View style={styles.callingButton}> */}
          {/* <TextComponent
              variant="muted"
              style={{ fontWeight: 'bold', marginRight: 8 }}>
              KES 540/Min
            </TextComponent> */}
          <TouchableOpacity onPress={() => console.log('Calling video..')}>
            <Badge>
              <MaterialIcons name="videocam" size={28} color="white" />
              <TextComponent style={{ color: 'white' }}>
                KES 540/Min
              </TextComponent>
            </Badge>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>

      {/* start: Upcoming group calls */}
      <View>
        <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
          {/* Open call are meant for anyone or invited only to join */}
          Open calls
        </TextComponent>

        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          renderItem={CallCard}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          contentContainerStyle={{ padding: 8 }}
        />
      </View>
      {/* end: Upcoming group calls */}
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
    // flexBasis: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
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
