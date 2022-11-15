import { PermissionsAndroid } from 'react-native';

export const requestPermissions = async () => {
  try {
    await requestContactsPermission();
  } catch (error) {}
};

export const requestContactsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CONTACTS,
      {
        title: 'Title',
        message: 'message',
        buttonNeutral: 'Ask me later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log(granted);
  } catch (error) {
    console.log(error);
  }
};
