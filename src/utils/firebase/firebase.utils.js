import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//  Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNhqaQPzdiinLNfM1VM624v54cp0UqlAo',
  authDomain: 'cloth-store-b3216.firebaseapp.com',
  projectId: 'cloth-store-b3216',
  storageBucket: 'cloth-store-b3216.appspot.com',
  messagingSenderId: '217134457255',
  appId: '1:217134457255:web:aa0890ccaf15f361db1682',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// initiate firbase database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users');
};
