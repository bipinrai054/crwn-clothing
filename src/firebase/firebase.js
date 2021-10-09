import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBT_KJDPxsJzTZiqVzYbgTDz8cm9xqJO7M',
  authDomain: 'crwn-db-2aa7c.firebaseapp.com',
  projectId: 'crwn-db-2aa7c',
  storageBucket: 'crwn-db-2aa7c.appspot.com',
  messagingSenderId: '18622862857',
  appId: '1:18622862857:web:4e59e0f00d4bfee03e4ad8',
  measurementId: 'G-8FEZJS7S3Z',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
