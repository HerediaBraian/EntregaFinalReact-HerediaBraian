import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTXfk1ZGqoR2Anog1shvgB76xiI9Jyg-g",
    authDomain: "entregafinal-herediabraian.firebaseapp.com",
    projectId: "entregafinal-herediabraian",
    storageBucket: "entregafinal-herediabraian.appspot.com",
    messagingSenderId: "803599783136",
    appId: "1:803599783136:web:ba5dfe595304b3bdce2c85"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
