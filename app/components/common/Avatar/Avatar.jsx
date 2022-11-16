import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import ActiveStatus from '@app/components/common/ActiveStatus';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Avatar = ({ imageUrl, isEditable, loadProfileImage, status }) => {
  if (isEditable) {
    return (
      <TouchableHighlight style={styles.container} onPress={loadProfileImage}>
        <ActiveStatus status={status} />
        {imageUrl ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.container}>
      <ActiveStatus status={status} />
      {imageUrl ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
    </View>
  );
};

Avatar.defaultProps = {
  imageUrl: '',
  isEditable: false,
  loadProfileImage: () => {},
  status: 'offline',
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  isEditable: PropTypes.bool,
  loadProfileImage: PropTypes.func,
  status: PropTypes.string,
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    borderRadius: 50,
    backgroundColor: COLORS.container.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    fontSize: FONT_SIZE.xxxl,
  },
});
