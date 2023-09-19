// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-disney-plus-app-9f296.firebaseapp.com",
  projectId: "react-disney-plus-app-9f296",
  storageBucket: "react-disney-plus-app-9f296.appspot.com",
  messagingSenderId: "208356979086",
  appId: "1:208356979086:web:71cb4bb12d0c61602d34df",
  measurementId: "G-NS1WX09RPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
