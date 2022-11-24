/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import AccountScreen from '@app/screens/onboarding/Account';
// import RegisterScreen from '@app/screens/onboarding/Register';
// import AccountBalanceScreen from '~/app/screens/settings/AccountBalance';
// import LandingScreen from '@app/screens/Landing';
// import CallsHomeScreen from '@app/screens/calls/Home';
// import ProfileScreen from '@app/screens/contacts/Profile_NEW_NEW';
// import SearchScreen from '@app/screens/contacts/Search';
import AppLoader from '~/app/components/AppLoader';
import initializeApp from '~/app/lib/config/firebase';
import AuthNavigator from '~/app/routes/AuthNavigation';

initializeApp();

export default function App() {
  return (
    <AppLoader>
      <AuthNavigator />
      <StatusBar style="dark" />
    </AppLoader>
  );
}
