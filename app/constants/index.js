import { Dimensions } from 'react-native';

import { COLORS } from '../styles/theme';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width,
  height,
};

export const STATUSES = {
  online: {
    color: COLORS.status.online,
  },
  offline: {
    color: COLORS.status.offline,
  },
};
