import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Avatar from '~/app/components/common/Avatar';
import TextComponent from '~/app/components/common/Text/Text';
import TextInput from '~/app/components/form/TextInput';
import { SCREEN } from '~/app/constants';
import { COLORS } from '~/app/styles/theme';

const ContactCard = () => {
  return (
    <View style={styles.contactCard}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          <Avatar size="s" uri="https://reactnative.dev/img/tiny_logo.png" />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
              Nas{' '}
            </TextComponent>
            <MaterialIcons name="verified" size={20} color="black" />
          </View>

          <TextComponent fontSize="m" variant="muted">
            Software Engineer
          </TextComponent>
        </View>
      </TouchableOpacity>

      {/* start: Accordion */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <MaterialIcons name="call" size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="videocam" size={32} />
        </TouchableOpacity>
      </View>
      {/* end: Accordion */}
    </View>
  );
};

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
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      {/* <FlatList /> */}
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
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.input.borderColor,
    backgroundColor: COLORS.input.backgroundColor,
  },
  contactCard: {
    paddingVertical: 4,
  },
});
