/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import SearchScreen from '@app/screens/contacts/Search';
import AppLoader from '~/app/components/AppLoader';
import { useInitApp } from '~/app/hooks/useApp';
import initializeApp from '~/app/lib/config/firebase';
import AuthNavigator from '~/app/routes/AuthNavigation';

import UserNavigator from './app/routes/UserNavigation';

initializeApp();

export default function App() {
  const { isRegistrationCompleted } = useInitApp();

  return (
    <AppLoader>
      {isRegistrationCompleted ? <UserNavigator /> : <AuthNavigator />}
      <StatusBar style="dark" />
    </AppLoader>
  );
}
