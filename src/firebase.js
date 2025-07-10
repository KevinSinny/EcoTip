// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8SdHb_a4eQRAC14UWuR9mraT_hKwy5nY",
  authDomain: "ecotip-7fc0d.firebaseapp.com",
  projectId: "ecotip-7fc0d",
  storageBucket: "ecotip-7fc0d.firebasestorage.app",
  messagingSenderId: "240032026725",
  appId: "1:240032026725:web:a11808e89801463044f68c",
  measurementId: "G-PJ5HMCXPP7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
