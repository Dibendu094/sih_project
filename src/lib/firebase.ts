
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

// Attempt to enable offline persistence.
try {
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firestore offline persistence enabled.");
    })
    .catch((err: any) => {
      if (err.code === 'failed-precondition') {
        // This can happen if multiple tabs are open.
        console.warn('Firestore offline persistence failed: multiple tabs open.');
      } else if (err.code === 'unimplemented') {
        // The browser doesn't support all features required.
        console.warn('Firestore offline persistence is not supported in this browser.');
      }
    });
} catch (err) {
    console.error("Error enabling Firestore persistence: ", err);
}


export { db };
