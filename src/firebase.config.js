import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVwwypAIiUqgZUAXZy5sMNn8VAcDppdVs",
  authDomain: "house-marketplace-app-4d1d2.firebaseapp.com",
  projectId: "house-marketplace-app-4d1d2",
  storageBucket: "house-marketplace-app-4d1d2.appspot.com",
  messagingSenderId: "258275929625",
  appId: "1:258275929625:web:0226e0826665c39ef5c488"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();