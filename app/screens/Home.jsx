import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import ContactCard from '~/app/components/common/ContactCard';
import SectionList from '~/app/components/layout/SectionList';
import { COLORS } from '~/app/styles/theme';

import ScreenHeader from '../components/common/ScreenHeader';

const dummyImage =
  'https://firebasestorage.googleapis.com/v0/b/jizbo-app.appspot.com/o/profiles%2Fimages%2FUzh483d7r9QR2UiXYep0Ltqkdej2?alt=media&token=475a08be-905d-4191-a3ad-900bf5a1440e';

const DATA = [
  {
    userName: 'Rabii Luena',
    id: 1,
    photoURL: dummyImage,
    occupation: 'Software Engineer',
  },
  { userName: 'Kelvin', id: 2, occupation: 'Developer' },
  { userName: 'Kelvin', id: 3, photoURL: dummyImage },
  { userName: 'Rabii Luena', id: 1, photoURL: dummyImage },
  { userName: 'Kelvin', id: 2 },
  { userName: 'Kelvin', id: 3, photoURL: dummyImage },
  { userName: 'Rabii Luena', id: 1, photoURL: dummyImage },
  { userName: 'Kelvin', id: 2 },
  { userName: 'Kelvin', id: 3, photoURL: dummyImage },
  { userName: 'Rabii Luena', id: 1, photoURL: dummyImage },
  { userName: 'Kelvin', id: 2 },
  { userName: 'Kelvin', id: 3, photoURL: dummyImage },
];

const Home = () => {
  const navigation = useNavigation();
  const goToSettings = () => navigation.push('Settings');
  const openSearchModal = () => navigation.push('SearchModal');

  return (
    <View style={styles.container}>
      <View>
        <ScreenHeader
          textHeading="Me"
          paddingBottom={14}
          showIcons
          onSearchPressed={openSearchModal}
          onSettingPressed={goToSettings}
        />
      </View>

      <ScrollView>
        <SectionList
          title="Locals"
          description="Prominent people in your country."
          data={DATA}
          showSeeAll
        />

        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />

        <Pressable style={{ padding: 16 }} onPress={openSearchModal}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>View all</Text>
        </Pressable>
      </ScrollView>

      {/* <SectionList
          title="Recommended"
          description="Recommendation for you."
          data={DATA}
        />
        <SectionList title="Trending" description="" data={DATA} />
        <SectionList
          title="Supporters"
          description="Sometimes engaging in calls to support causes."
          data={DATA}
        /> */}
      {/* <SectionList
        title="Categories"
        description="Sometimes engaging in calls to support causes."
        data={DATA}
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 0.1 * SCREEN.width,
    backgroundColor: COLORS.container.background,
  },
});
