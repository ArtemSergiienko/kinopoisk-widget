import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';


// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID,
//   measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyA2Lep63DYUqb437aRJqHBj2T3VVZAdOlo",
  authDomain: "kinopoisk-base.firebaseapp.com",
  databaseURL: "https://kinopoisk-base-default-rtdb.firebaseio.com",
  projectId: "kinopoisk-base",
  storageBucket: "kinopoisk-base.appspot.com",
  messagingSenderId: "542912551432",
  appId: "1:542912551432:web:90e3a0d0fb5408fb754fbd",
  measurementId: "G-2BT7D1J30T"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

//initialize firebase auth
// const auth = getAuth();