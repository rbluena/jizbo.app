import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width,
  height,
};

export const STATUSES = {
  online: {
    color: '#00FFFF',
  },
  offline: {
    color: '#fff',
  },
};
