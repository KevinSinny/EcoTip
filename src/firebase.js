// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SdHb_a4eQRAC14UWuR9mraT_hKwy5nY",
  authDomain: "ecotip-7fc0d.firebaseapp.com",
  projectId: "ecotip-7fc0d",
  storageBucket: "ecotip-7fc0d.firebasestorage.app",
  messagingSenderId: "240032026725",
  appId: "1:240032026725:web:a11808e89801463044f68c",
  measurementId: "G-PJ5HMCXPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);