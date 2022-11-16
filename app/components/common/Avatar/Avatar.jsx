import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Avatar = ({ imageUrl, isEditable, loadProfileImage }) => {
  if (isEditable) {
    return (
      <TouchableHighlight style={styles.container} onPress={loadProfileImage}>
        {imageUrl ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.container}>
      {imageUrl ? <Image /> : <Text style={styles.profileLetter}>R</Text>}
    </View>
  );
};

Avatar.defaultProps = {
  imageUrl: '',
  isEditable: false,
  loadProfileImage: () => {},
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  isEditable: PropTypes.bool,
  loadProfileImage: PropTypes.func,
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
