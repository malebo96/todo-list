import firebase from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDctuQxZcblMQEOj_PyiK4UaquQ0kNRlrM',
  authDomain: 'todos-f73e6.firebaseapp.com',
  projectId: 'todos-f73e6',
  storageBucket: 'todos-f73e6.appspot.com',
  messagingSenderId: '557208831827',
  appId: '1:557208831827:web:498a1b348259fae39343a6',
  measurementId: 'G-CZLMX49X4Y'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
