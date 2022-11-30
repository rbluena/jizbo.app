import { useState } from 'react';

import { useAuthInitialization } from './useAuth';

export function useApp() {
  const [isAppLoading, setIsAppLoading] = useState(false);
}

export function useInitApp() {
  // const [isAppLoading, setIsAppLoading] = useState(true);
  const { currentUser, initializing: isAuthInitializing } =
    useAuthInitialization();

  return {
    isLoggedIn: currentUser !== null && isAuthInitializing === false,
    isRegistrationCompleted: currentUser?.displayName?.length > 0,
  };
}
