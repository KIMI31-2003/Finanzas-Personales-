// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl83kQf_HIlVJhmP6kbqXgUNtvdodtOLA",
  authDomain: "finanzas-personales-6adc5.firebaseapp.com",
  projectId: "finanzas-personales-6adc5",
  storageBucket: "finanzas-personales-6adc5.firebasestorage.app",
  messagingSenderId: "429610280095",
  appId: "1:429610280095:web:367cd4728ca589c1686eaa",
  measurementId: "G-SLWLDS0BMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);