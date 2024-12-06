// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADpimv8MstQXe9KIMr9aAKHgTacIx6E5o",
  authDomain: "shoppy-8e29b.firebaseapp.com",
  databaseURL:
    "https://shoppy-8e29b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-8e29b",
  storageBucket: "shoppy-8e29b.appspot.com",
  messagingSenderId: "433904064533",
  appId: "1:433904064533:web:e82cd7e3b222dd38bb161c",
  measurementId: "G-2FYE4EJ0H8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => console.log(error));
}

export async function logout() {
  return signOut(auth).then(() => null);
}
