import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZE } from '~/app/styles/theme';

const ScreenHeader = ({ textHeading, textSubheading }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textHeading}>{textHeading}</Text>
      {textSubheading ? (
        <Text style={styles.textSubheading}>{textSubheading}</Text>
      ) : null}
    </View>
  );
};

ScreenHeader.defaultProps = {
  textSubheading: '',
};

ScreenHeader.propTypes = {
  textHeading: PropTypes.string.isRequired,
  textSubheading: PropTypes.string,
};

export default ScreenHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 32,
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
