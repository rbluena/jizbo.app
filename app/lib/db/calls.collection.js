/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';

export const callsRef = firestore().collection('Calls');
