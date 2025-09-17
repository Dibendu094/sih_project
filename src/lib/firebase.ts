
import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "studio-6705188507-c1501",
  "appId": "1:615134300460:web:6171a49acf8d25c2b18489",
  "storageBucket": "studio-6705188507-c1501.firebasestorage.app",
  "apiKey": "AIzaSyBp0eL2P3RxN1X12qWeethNrhO_YCYbPAc",
  "authDomain": "studio-6705188507-c1501.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "615134300460"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  enableIndexedDbPersistence(db);
} catch (err: any) {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Firestore offline persistence failed: multiple tabs open.');
  } else if (err.code === 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    console.warn('Firestore offline persistence is not supported in this browser.');
  }
}

export { db };
