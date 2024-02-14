// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9nApglZXMm2mvphzTPpHmI38OIj6YCyQ",
    authDomain: "netflix-react-yt-e24f0.firebaseapp.com",
    projectId: "netflix-react-yt-e24f0",
    storageBucket: "netflix-react-yt-e24f0.appspot.com",
    messagingSenderId: "401761158592",
    appId: "1:401761158592:web:e9abbc01def4e894947425",
    measurementId: "G-6C2LRSE76B"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);