import { request, PERMISSIONS } from 'react-native-permissions';

export function requestPermission() {}

export async function requestContactsPermission() {
  const status = await request(PERMISSIONS.ANDROID.READ_CONTACTS);

  if (status === 'denied') {
    throw new Error('Contact permission is denied!');
  }

  return status;
}

export async function requestStoragePermission() {
  const status = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);

  if (status === 'denied') {
    throw new Error('Storage permission is denied!');
  }

  return status;
}

export async function requestMicrophonePermission() {
  const status = await request(PERMISSIONS.ANDROID.READ_PHONE_STATE);

  if (status === 'denied') {
    throw new Error('Microphone permission is denied!');
  }

  return status;
}

export async function requestCameraPermission() {
  const status = await request(PERMISSIONS.ANDROID.CAMERA);

  if (status === 'denied') {
    throw new Error('Camera permission is denied!');
  }

  return status;
}
