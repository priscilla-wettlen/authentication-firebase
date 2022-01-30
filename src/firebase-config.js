import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "my-fake-website-auth.firebaseapp.com",
  projectId: "my-fake-website-auth",
  storageBucket: "my-fake-website-auth.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_ID}`
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

