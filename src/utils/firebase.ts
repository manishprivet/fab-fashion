import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD9LXmrEpWiwQ4u_SjBvH-qi6upw0voXxY',
  authDomain: 'fab-fashion-ac7cf.firebaseapp.com',
  databaseURL: 'https://fab-fashion-ac7cf.firebaseio.com',
  projectId: 'fab-fashion-ac7cf',
  storageBucket: 'fab-fashion-ac7cf.appspot.com',
  messagingSenderId: '51959955769',
  appId: '1:51959955769:web:dcdff9e27bee907265a8e8',
  measurementId: 'G-7DP1G9P50S',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: User | null,
  additionalData?: Record<string, unknown>
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snap = await userRef.get();

  if (!snap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
