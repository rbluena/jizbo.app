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

const Avatar = ({ uri, isEditable, loadProfileImage, status, size = 'm' }) => {
  const style = { container: { width: 80, height: 80, borderRadius: 50 } };

  if (size === 's') {
    style.container.width = 50;
    style.container.height = 50;
    style.container.borderRadius = 100;
  }

  if (size === 'l') {
    style.container.width = 110;
    style.container.height = 110;
    style.container.borderRadius = 100;
  }

  if (isEditable) {
    return (
      <TouchableHighlight
        style={[styles.container, style.container]}
        onPress={loadProfileImage}>
        <ActiveStatus status={status} />
        {uri ? (
          <Image style={styles.img} source={{ uri }} />
        ) : (
          <Text style={styles.profileLetter}>R</Text>
        )}
      </TouchableHighlight>
    );
  }

  return (
    <View style={[styles.container, style.container]}>
      <ActiveStatus status={status} />
      {uri ? (
        <Image style={styles.img} source={{ uri }} />
      ) : (
        <Text style={styles.profileLetter}>R</Text>
      )}
    </View>
  );
};

Avatar.defaultProps = {
  uri: '',
  isEditable: false,
  loadProfileImage: () => {},
  status: 'offline',
};

Avatar.propTypes = {
  uri: PropTypes.string,
  isEditable: PropTypes.bool,
  loadProfileImage: PropTypes.func,
  status: PropTypes.string,
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.container.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    fontSize: FONT_SIZE.xxxl,
  },
  img: {
    ...StyleSheet.absoluteFill,
  },
});
