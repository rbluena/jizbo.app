import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from '~/app/screens/Landing';
import AccountScreen from '~/app/screens/onboarding/Account';
import RegisterScreen from '~/app/screens/onboarding/Register';

const AuthenticationStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Landing" component={LandingScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
      <AuthenticationStack.Screen name="Account" component={AccountScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigator;
