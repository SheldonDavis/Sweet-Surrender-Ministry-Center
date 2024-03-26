
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const ENV = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV.VITE_FB_API_Key,

  authDomain: ENV.VITE_FB_AUTH_DOMAIN,

  projectId: ENV.VITE_FB_PROJECT_ID,

  storageBucket: ENV.VITE_FB_STORAGE_BUCKET,

  messagingSenderId: ENV.VITE_FB_MESSAGING_SENDER_ID,

  appId: ENV.VITE_FB_APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};