// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBAoHN3-2gmxbMnIu6MEUapfrfM55zVXVQ",
  authDomain: "uber-next-clone-3d8f9.firebaseapp.com",
  projectId: "uber-next-clone-3d8f9",
  storageBucket: "uber-next-clone-3d8f9.appspot.com",
  messagingSenderId: "1012789231680",
  appId: "1:1012789231680:web:f4c2aaf11f49cbf07edfa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}