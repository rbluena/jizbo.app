import firebase from '@react-native-firebase/app';

const credentaials = {
  apiKey: 'AIzaSyCYpsOQ7L53avayN5KYagIWo-1FWU8Nbjo',
  authDomain: 'jizbo-app.firebaseapp.com',
  projectId: 'jizbo-app',
  databaseURL: 'undefined',
  storageBucket: 'jizbo-app.appspot.com',
  messagingSenderId: '676475201395',
  appId: '1:676475201395:android:368b5d9106d687a22e4706',
};

const initializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(credentaials).catch(() => {});
  }
};

export default initializeApp;
