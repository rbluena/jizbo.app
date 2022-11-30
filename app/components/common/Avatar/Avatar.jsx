import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ActiveStatus from '@app/components/common/ActiveStatus';

import { COLORS, FONT_SIZE } from '@app/styles/theme';

const Avatar = ({
  uri,
  isEditable,
  loadProfileImage,
  onlineStatus,
  size = 'm',
  rounded = false,
  initial,
}) => {
  const largeStyle = {
    width: 110,
    height: 110,
    borderRadius: rounded ? 80 : 30,
  };

  if (isEditable) {
    return (
      <TouchableOpacity
        style={[styles.container, size === 'l' ? largeStyle : {}]}
        onPress={loadProfileImage}>
        <ActiveStatus
          onlineStatus={onlineStatus}
          style={[styles.onlineStatus]}
        />

        {uri?.length ? (
          <Image
            style={[styles.img, size === 'l' ? largeStyle : {}]}
            source={{ uri }}
            resizeMode="contain"
          />
        ) : (
          <Text
            style={[
              styles.profileLetter,
              size === 'l' ? { fontSize: FONT_SIZE.xxxl } : {},
            ]}>
            {initial[0]?.toUpperCase()}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        styles.container,
        size === 'l' ? largeStyle : { borderRadius: rounded ? 30 : 15 },
      ]}>
      <ActiveStatus onlineStatus={onlineStatus} style={[styles.onlineStatus]} />

      {uri?.length ? (
        <Image
          style={[
            styles.img,
            size === 'l' ? largeStyle : { borderRadius: rounded ? 30 : 15 },
          ]}
          source={{ uri }}
          resizeMode="contain"
        />
      ) : (
        <Text
          style={[
            styles.profileLetter,
            size === 'l' ? { fontSize: FONT_SIZE.xxxl } : {},
          ]}>
          {initial?.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

Avatar.defaultProps = {
  uri: '',
  size: 'm',
  isEditable: false,
  loadProfileImage: () => {},
  onlineStatus: 'offline',
  rounded: false,
  initial: '',
};

Avatar.propTypes = {
  uri: PropTypes.string,
  size: PropTypes.string,
  isEditable: PropTypes.bool,
  loadProfileImage: PropTypes.func,
  onlineStatus: PropTypes.string,
  initial: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.avatar.background,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 4,
  },
  profileLetter: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.avatar.textColor,
    fontWeight: 'bold',
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.container.borderColor,
  },
  onlineStatus: {
    position: 'absolute',
    right: -1,
    bottom: -1,
  },
});
