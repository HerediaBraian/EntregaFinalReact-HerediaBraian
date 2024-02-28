import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDWHT_dDULflqR0BhI--JeIsTIK1qMPWM",
  authDomain: "react-proyecto-final-73dc3.firebaseapp.com",
  projectId: "react-proyecto-final-73dc3",
  storageBucket: "react-proyecto-final-73dc3.appspot.com",
  messagingSenderId: "389562777352",
  appId: "1:389562777352:web:80f8bd9cd85c2ae46836bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
