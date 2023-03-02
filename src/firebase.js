import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDai7Zjc3j5yoGhnzDlpvNyZAd5PUHDL-E",
  authDomain: "netflix-clone-fd225.firebaseapp.com",
  projectId: "netflix-clone-fd225",
  storageBucket: "netflix-clone-fd225.appspot.com",
  messagingSenderId: "420722251170",
  appId: "1:420722251170:web:4ad7e1c8794d7c2dfa4efb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,db };
// export default db;