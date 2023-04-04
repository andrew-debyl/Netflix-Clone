// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjXintejdCHj3PDy3jSpS8MC0WMUqIxps",
  authDomain: "netflix-clone-d48df.firebaseapp.com",
  projectId: "netflix-clone-d48df",
  storageBucket: "netflix-clone-d48df.appspot.com",
  messagingSenderId: "188524819022",
  appId: "1:188524819022:web:45a38fbb5199bfb284491f"
};

// Initialize Firebase (have to do this because we are using Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
