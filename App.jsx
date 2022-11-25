/* eslint-disable react/style-prop-object */
import auth from '@react-native-firebase/auth';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import SearchScreen from '@app/screens/contacts/Search';
import AppLoader from '~/app/components/AppLoader';
import initializeApp from '~/app/lib/config/firebase';
import AuthNavigator from '~/app/routes/AuthNavigation';

import UserNavigator from './app/routes/UserNavigation';

// import AccountScreen from '@app/screens/onboarding/Account';
// import RegisterScreen from '@app/screens/onboarding/Register';
// import AccountBalanceScreen from '~/app/screens/settings/AccountBalance';
// import LandingScreen from '@app/screens/Landing';
// import CallsHomeScreen from '@app/screens/calls/Home';

initializeApp();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { currentUser } = auth();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppLoader>
      {isLoggedIn ? <UserNavigator /> : <AuthNavigator />}
      <StatusBar style="dark" />
    </AppLoader>
  );
}
