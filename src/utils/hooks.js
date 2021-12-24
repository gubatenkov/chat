import { useEffect, useState } from 'react';
import {
  query,
  collection,
  onSnapshot,
  orderBy,
  // limit,
} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';

export const useFetchMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt')
      // limit(6)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const source = querySnapshot.metadata.hasPendingWrites
        ? 'Local'
        : 'Server';
      if (source) {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setMessages(messages);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return [messages, isLoading];
};

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const email = process.env.REACT_APP_USER_LOGIN;
  const password = process.env.REACT_APP_USER_PASS;

  useEffect(() => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess(false);
        console.log('Error code:', errorCode, 'Error: message:', errorMessage);
      });
    //eslint-disable-next-line
  }, []);

  return [user, isSuccess];
};

export const getTimeFromTimestamp = (timestamp) => {
  if (!timestamp) return '04:20';
  const time = new Date(timestamp * 1000);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};

export const getDateFromMessage = (prevDate, currDate) => {
  return prevDate === currDate
    ? null
    : +currDate.split(' ')[0] === new Date(Date.now()).getDate()
    ? 'Сегодня'
    : currDate;
};
