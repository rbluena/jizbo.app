import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import SquareContactCard from '~/app/components/common/SquareContactCard';
import { COLORS } from '~/app/styles/theme';

const SectionList = ({
  title,
  description = '',
  showSeeAll = false,
  data = [],
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {showSeeAll ? (
          <Pressable style={styles.textButton}>
            <Text style={styles.linkText}>See all</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.description}>{description}</Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SquareContactCard
            userName={item.userName}
            photoURL={item.photoURL}
            occupation={item.occupation}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.scrollContainer}
        initialNumToRender={10}
      />
    </View>
  );
};

SectionList.defaultProps = {
  showSeeAll: false,
  description: '',
  data: [],
};

SectionList.propTypes = {
  title: PropTypes.string.isRequired,
  showSeeAll: PropTypes.bool,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any),
};

export default SectionList;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.header.title,
  },
  textButton: {
    padding: 4,
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.loader.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 16,
  },
  description: {
    color: COLORS.header.subheading,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    marginBottom: 32,
    marginTop: 16,
  },
});
