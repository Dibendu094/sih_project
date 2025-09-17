
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

export { db };
