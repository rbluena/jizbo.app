import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  VirtualizedList,
  Pressable,
  Text,
} from 'react-native';
import ContactCard from '~/app/components/common/ContactCard';
import { TextInput } from '~/app/components/form';
import { SCREEN } from '~/app/constants';

const DATA = [{}, {}, {}, {}];

const getItem = () => ({
  id: Math.random().toString(12).substring(0),
});

const ListHeaderComponent = ({ onSearch, searchValue }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        zIndex: 10,
      }}>
      <Pressable style={{}} onPress={() => navigation.goBack()}>
        <MaterialIcons name="close" size={32} />
      </Pressable>

      <TextInput
        placeholder="Who would you like to call"
        onChange={onSearch}
        value={searchValue}
      />
    </View>
  );
};

const Modal = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <ListHeaderComponent onSearch={setSearchText} searchValue={searchText} />

      {/* start: Rendeing search result */}
      {searchText?.length > 2 && !isLoading ? (
        <VirtualizedList
          DATA={DATA}
          getItemCount={() => 10}
          getItem={getItem}
          keyExtractor={item => item.key}
          renderItem={() => <ContactCard />}
          stickyHeaderHiddenOnScroll
        />
      ) : (
        <Text>Searching...</Text>
      )}

      {/* end: Rendeing search result */}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: 'white',
    paddingHorizontal: 0.05 * SCREEN.width,
    paddingTop: 34,
  },
});
