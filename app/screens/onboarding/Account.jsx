import { SCREEN } from '@app/constants';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import ScreenHeader from '~/app/components/common/ScreenHeader';
import TextComponent from '~/app/components/common/Text/Text';
import TextInput from '~/app/components/form/TextInput/TextInput';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const loadProfileImage = () => {};

  return (
    <View style={styles.container}>
      <ScreenHeader
        textHeading="Account"
        textSubheading="Provide your public information"
      />
      <TouchableHighlight
        style={styles.profileImageContainer}
        onPress={loadProfileImage}>
        {profileImage ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
      </TouchableHighlight>

      <View>
        <TextInput
          placeholder="Name"
          autoFocus
          style={{
            fontSize: FONT_SIZE.xl,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.input.borderColor,
            width: '100%',
            marginVertical: 8,
            padding: 0,
          }}
          onChange={text => setUserName(text)}
          value={userName}
        />
        <TextInput
          placeholder="About me"
          onChange={text => setBio(text)}
          style={{
            fontSize: FONT_SIZE.l,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.input.borderColor,
            marginVertical: 8,
            width: '100%',
            padding: 0,
          }}
          value={bio}
          multiline
        />
        <TextComponent style={{ marginTop: 8 }}>
          This could be your fullname or nickname. This is how people will know
          you from Jizbo.
        </TextComponent>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.saveButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              padding: 8,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  saveButton: {
    backgroundColor: 'black',
    marginTop: 32,
    borderRadius: 8,
    width: 250,
  },
});
