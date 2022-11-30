import auth from '@react-native-firebase/auth';
import { useEffect, useState, useCallback } from 'react';

export function useAuthInitialization() {
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const onAuthStateChanged = useCallback(user => {
    setCurrentUser(user);

    if (initializing) setInitializing(false);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return {
    currentUser,
    initializing,
  };
}

export function useCurrentUser() {}
