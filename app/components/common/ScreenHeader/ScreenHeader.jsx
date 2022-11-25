import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { COLORS, FONT_SIZE } from '~/app/styles/theme';

const ScreenHeader = ({
  textHeading,
  textSubheading,
  showIcons = false,
  paddingBottom = 54,
  onSettingPressed,
  onSearchPressed,
}) => {
  return (
    <View style={[styles.wrapper, { paddingBottom }]}>
      <View>
        <Text style={styles.textHeading}>{textHeading}</Text>
        {textSubheading ? (
          <Text style={styles.textSubheading}>{textSubheading}</Text>
        ) : null}
      </View>

      {showIcons ? (
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{ padding: 4, marginRight: 8 }}
            onPress={onSearchPressed}>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>

          <Pressable style={{ padding: 4 }} onPress={onSettingPressed}>
            <SimpleLineIcons name="settings" size={24} color="black" />
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

ScreenHeader.defaultProps = {
  textSubheading: '',
  paddingBottom: 54,
  showIcons: false,
  onSettingPressed: () => {},
  onSearchPressed: () => {},
};

ScreenHeader.propTypes = {
  textHeading: PropTypes.string.isRequired,
  textSubheading: PropTypes.string,
  paddingBottom: PropTypes.number,
  showIcons: PropTypes.bool,
  onSettingPressed: PropTypes.func,
  onSearchPressed: PropTypes.func,
};

export default ScreenHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textHeading: {
    color: COLORS.header.title,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.xxl,
    marginBottom: 4,
  },
  textSubheading: {
    color: COLORS.header.subheading,
    fontSize: 16,
  },
});
