import { Dimensions } from 'react-native';

import { COLORS } from '../styles/theme';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width,
  height,
};

export const STATUSES = {
  online: {
    name: 'online',
    backgroundColor: COLORS.status.online.backgroundColor,
    borderColor: COLORS.status.online.borderColor,
  },
  offline: {
    name: 'offline',
    backgroundColor: COLORS.status.offline.backgroundColor,
    borderColor: COLORS.status.offline.borderColor,
  },
};

export const FIREBASE_ASSETS = {
  profiles: {
    images: 'profiles/images/',
    videos: 'profiles/videos',
    qrCodes: 'profiles/qr-codes',
  },
};

export const FIREBASE_STORAGES = {
  profiles: {
    images: 'profiles/images/',
    videos: 'profiles/videos',
    qrCodes: 'profiles/qr-codes',
  },
};
