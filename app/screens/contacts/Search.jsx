import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  VirtualizedList,
} from 'react-native';
import ContactCard from '~/app/components/common/ContactCard';
import TextInput from '~/app/components/form/TextInput';
import { SCREEN } from '~/app/constants';
import { COLORS } from '~/app/styles/theme';

const DATA = [{}, {}, {}, {}];

const getItem = () => ({
  id: Math.random().toString(12).substring(0),
});

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.searchInputWrapper}>
          <TextInput
            onChange={text => setSearchValue(text)}
            value={searchValue}
            placeholder="Search contact"
            iconName="search"
            style={{ padding: 4, fontSize: 18 }}
          />
        </View>

        {/* <TouchableHighlight style={{ padding: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="filter-list" size={28} color="black" />
            <Text>Filter</Text>
          </View>
        </TouchableHighlight> */}
      </View>

      {/* start: Search result */}
      <View>
        {/* start: Show local prominent people */}
        <Text>Show local prominent people first</Text>
        {/* end: Show local prominent people */}

        {/* start: Show   */}

        {isSearching ? (
          <ActivityIndicator size={36} color={COLORS.loader.slate} />
        ) : null}
      </View>
      {/* end: Search result */}

      {/* start: Popular in your country */}
      <VirtualizedList
        data={DATA}
        getItemCount={() => 10}
        getItem={getItem}
        keyExtractor={item => item.key}
        renderItem={item => <ContactCard item={item} />}
      />
      {/* end: Popular in your country */}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN.width * 0.05,
    backgroundColor: COLORS.container.background,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.input.borderColor,
    backgroundColor: COLORS.input.backgroundColor,
  },
});
