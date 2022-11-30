import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Avatar from '~/app/components/common/Avatar';
import BlockButton from '~/app/components/common/BlockButton';
import ScreenHeader from '~/app/components/common/ScreenHeader';
import TextComponent from '~/app/components/common/Text/Text';
import TextInput from '~/app/components/form/TextInput';
import { SCREEN } from '~/app/constants';
import { uploadProfileImage } from '~/app/lib/db/storage.collection';
import { createNewUser } from '~/app/lib/db/users.collection';
import { toastMessage } from '~/app/utils/message';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Profile = ({ route }) => {
  // eslint-disable-next-line no-multi-assign
  const currUserRef = (useRef(null).current = auth().currentUser);
  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState(
    () => currUserRef?.displayName || '',
  );
  const [occupation, setOccupation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState('');

  const navigation = useNavigation();
  const country = route?.params?.country;

  /**
   *
   */
  const loadProfileImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  /**
   *
   */
  const saveUserData = async () => {
    setIsLoading(true);

    try {
      let photoURL = null;

      // Uploading user's image if user choose to do so.
      if (profileImage.length > 0) {
        photoURL = await uploadProfileImage({
          uid: currUserRef?.uid,
          filePath: profileImage,
        });
      }

      await createNewUser({
        displayName,
        photoURL,
        phoneNumber: currUserRef?.phoneNumber,
        occupation,
        country,
      });

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      //  TODO: We might want to provide this error information to an error reporting service
      toastMessage(
        'There was an error on our end. You can try it again later!',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <ScreenHeader
          textHeading={displayName.length ? displayName : 'Account'}
          textSubheading={bio.length ? bio : 'Add your public information'}
        />
        <Avatar
          initial={displayName[0]?.toUpperCase()}
          size="l"
          loadProfileImage={loadProfileImage}
          uri={profileImage || currUserRef?.photoURL}
          isEditable
        />
      </View>

      <View>
        <TextInput
          placeholder="Name (required)"
          autoFocus
          onChange={text => setDisplayName(text)}
          value={displayName}
        />
        <TextInput
          placeholder="Occupation"
          autoFocus
          onChange={text => setOccupation(text)}
          value={occupation}
        />
        <TextInput
          placeholder="Bio"
          onChange={text => setBio(text)}
          style={{ height: 40, paddingBottom: 16 }}
          value={bio}
          multiline
          numberOfLines={3}
          maxLength={150}
        />

        <TextComponent align="center" variant="muted" style={{ marginTop: 8 }}>
          This could be your fullname or nickname. This is how people will know
          you from Jizbo.
        </TextComponent>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <BlockButton
          textLabel="Continue"
          onPress={saveUserData}
          disabled={displayName.length === 0 || isLoading}
          showLoader={isLoading}
        />
      </View>
    </View>
  );
};

Profile.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 0.1 * SCREEN.width,
    backgroundColor: COLORS.container.background,
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
