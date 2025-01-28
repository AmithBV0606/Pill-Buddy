// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMjQnDoEF4A18ldLfoggdDdKQEX_JL77E",
  authDomain: "mobile-applications-e6ef0.firebaseapp.com",
  projectId: "mobile-applications-e6ef0",
  storageBucket: "mobile-applications-e6ef0.firebasestorage.app",
  messagingSenderId: "122983222798",
  appId: "1:122983222798:web:53e78b39fe90d6f3dcf65f",
  measurementId: "G-C0NJ7R19TR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});