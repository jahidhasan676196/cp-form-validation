// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC6MeWnUBKzl8yjetjzsEU9CIti4lG9wU",
  authDomain: "cp-form-validation.firebaseapp.com",
  projectId: "cp-form-validation",
  storageBucket: "cp-form-validation.firebasestorage.app",
  messagingSenderId: "914600396735",
  appId: "1:914600396735:web:1adb6519a70ad90c7d430a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;