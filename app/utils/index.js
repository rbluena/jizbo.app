import { PermissionsAndroid } from 'react-native';

export const requestPermissions = async () => {
  try {
    // await requestContactsPermission();
    await requestExternalStoragePermission();
  } catch (error) {
    console.warn(error);
    throw error;
  }
};

export const requestContactsPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  );

  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    throw Error('Permission denied for accessing contacts.');
  }
};
// export const requestCameraPermission = async () => {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSONS.CAMERA,
//   );

//   if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//     throw Error('Permission denied for accessing camera.');
//   }
// };

export const requestExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSONS.STORAGE,
    );

    console.log(granted);

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw Error('Permission denied for accessing camera.');
    }
  } catch (error) {
    console.warn(error);
    throw error;
  }
};
