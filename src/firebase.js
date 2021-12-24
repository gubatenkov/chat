import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDx0q0grZbkXGdHLpHRYW40PUhddxDTzLM',
  authDomain: 'ice-dating-e7436.firebaseapp.com',
  projectId: 'ice-dating-e7436',
  storageBucket: 'ice-dating-e7436.appspot.com',
  messagingSenderId: '14962049259',
  appId: '1:14962049259:web:c9f4a11cb35eca373efeae',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
