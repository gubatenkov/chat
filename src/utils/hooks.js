import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  getDoc,
  doc,
} from 'firebase/firestore';

export const useFetchMessages = (db) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const q = query(collection(db, 'messages'));

  const getCollection = async () => {
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      if (doc.exists()) {
        const message = doc.data();
        setMessages((prev) => prev.concat(message));
      } else {
        console.log('no message');
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return [messages, isLoading];
};
