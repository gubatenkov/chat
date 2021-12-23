import React, { useState } from 'react';
import Chat from './pages/Chat';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import SignIn from './pages/SignIn';

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
const firestore = getFirestore(app);

function App() {
  const [user, setUser] = useState({});

  return (
    <div className='app'>
      <div className='container'>
        {user ? (
          <Chat db={firestore} />
        ) : (
          <SignIn
            signIn={signInWithEmailAndPassword}
            auth={auth}
            // email={email}
            // pass={password}
          />
        )}
      </div>
    </div>
  );
}

export default App;
