// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from firebase/auth;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByDCyyd1sq0oxPVcufj0ergL2z0cqHORA",
  authDomain: "fund-a-box-f6227.firebaseapp.com",
  projectId: "fund-a-box-f6227",
  storageBucket: "fund-a-box-f6227.firebasestorage.app",
  messagingSenderId: "496940156016",
  appId: "1:496940156016:web:a9629b939a25cfafb3e0b5",
  measurementId: "G-5ZJZ0GJQ5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);