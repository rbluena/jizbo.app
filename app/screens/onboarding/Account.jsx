import { SCREEN } from '@app/constants';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
} from 'react-native';

import TextComponent from '@app/components/common/Text/Text';
import TextInput from '@app/components/form/TextInput/TextInput';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const loadProfileImage = () => {};

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.profileImageContainer}
        onPress={loadProfileImage}>
        {profileImage ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
      </TouchableHighlight>

      {/* <TextComponent align="center">+254 741 709889</TextComponent> */}

      <View>
        <TextInput
          placeholder="Name"
          autoFocus
          style={{ fontSize: FONT_SIZE.xl }}
          onChange={text => setUserName(text)}
          value={userName}
        />
        <TextInput
          placeholder="About me"
          onChange={text => setBio(text)}
          style={{ fontSize: FONT_SIZE.m }}
          value={bio}
          multiline
          maxLength={35}
        />
        <TextComponent align="center">
          This could be your fullname or nickname. This is how people will know
          you from Jizbo.
        </TextComponent>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 0.1 * SCREEN.width,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 50,
    backgroundColor: COLORS.container.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    fontSize: FONT_SIZE.xxxl,
  },
});
