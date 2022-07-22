// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP93IXT-QoMJZskLPW5fNLWZW-9mIIENc',
  authDomain: 'spotvisit-83956.firebaseapp.com',
  projectId: 'spotvisit-83956',
  storageBucket: 'spotvisit-83956.appspot.com',
  messagingSenderId: '1019598063837',
  appId: '1:1019598063837:web:4696db6d57ae871fa9b334',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, app };
