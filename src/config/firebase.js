// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8bEQ7G38vG8F3XYosDwb67eC5r8OjkxM",
  authDomain: "fir-learning-5d9ec.firebaseapp.com",
  projectId: "fir-learning-5d9ec",
  storageBucket: "fir-learning-5d9ec.appspot.com",
  messagingSenderId: "672454696445",
  appId: "1:672454696445:web:fe9d6cedc949e5434d4d94",
  measurementId: "G-VXG2QZ6WRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);