// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfgIwddJR7cRpvUGkQzSQiP3lwKkF1ij8',
  authDomain: 'notes-app-react-11a55.firebaseapp.com',
  projectId: 'notes-app-react-11a55',
  storageBucket: 'notes-app-react-11a55.appspot.com',
  messagingSenderId: '631791688457',
  appId: '1:631791688457:web:887dea92b7e9a6b96d11d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
