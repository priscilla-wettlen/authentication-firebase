import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjyBEyc0no8vG1_igCEG0OZYEn-vsuLNk",
  authDomain: "my-fake-website-auth.firebaseapp.com",
  projectId: "my-fake-website-auth",
  storageBucket: "my-fake-website-auth.appspot.com",
  messagingSenderId: "302812591593",
  appId: "1:302812591593:web:11caca234c0d726b49c778"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

