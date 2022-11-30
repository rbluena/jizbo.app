import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '~/app/screens/Home';
import SearchModal from '~/app/screens/contacts/SearchModal';
import SettingsScreen from '~/app/screens/settings/Settings';

const UserNavigationStack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <UserNavigationStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <UserNavigationStack.Screen name="Home" component={HomeScreen} />
      <UserNavigationStack.Screen name="Settings" component={SettingsScreen} />
      <UserNavigationStack.Screen
        name="SearchModal"
        component={SearchModal}
        options={{ presentation: 'containedTransparentModal' }}
      />
    </UserNavigationStack.Navigator>
  );
};

export default UserNavigator;
