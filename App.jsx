import React from 'react';
// import AccountScreen from '@app/screens/onboarding/Account';
// import RegisterScreen from '@app/screens/onboarding/Register';
// import AccountBalanceScreen from '~/app/screens/settings/AccountBalance';
// import LandingScreen from '@app/screens/Landing';
// import CallsHomeScreen from '@app/screens/calls/Home';
// import ProfileScreen from '@app/screens/contacts/Profile_NEW_NEW';
// import SearchScreen from '@app/screens/contacts/Search';
import AppLoader from '~/app/components/AppLoader';
import AuthNavigator from '~/app/routes/AuthNavigation';

export default function App() {
  return (
    <AppLoader>
      <AuthNavigator />
    </AppLoader>
  );
}
