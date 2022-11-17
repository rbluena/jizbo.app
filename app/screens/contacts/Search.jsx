import { SCREEN } from '@app/constants';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';

import TextInput from '@app/components/form/TextInput/TextInput';

import { COLORS } from '@app/styles/theme';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchInputWrapper}>
        <TextInput
          onChange={text => setSearchValue(text)}
          value={searchValue}
          placeholder="Search contact"
        />

        <TouchableHighlight
          style={{
            position: 'absolute',
            height: '100%',
            right: 0,
          }}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableHighlight>
      </View>

      {/* start: Popular in your country */}
      <FlatList />
      {/* end: Popular in your country */}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN.width * 0.1,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderColor: COLORS.border,
    borderWidth: 1,
    backgroundColor: COLORS.background,
  },
});
