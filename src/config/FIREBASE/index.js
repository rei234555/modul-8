import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAWCBF5CtYf8scBrFgTh67xzCO_o6OVIYE",
  authDomain: "terserah-1fe1a.firebaseapp.com",
  projectId: "terserah-1fe1a",
  storageBucket: "terserah-1fe1a.appspot.com",
  messagingSenderId: "686117880190",
  appId: "1:686117880190:web:56667675388fe90e54b32f"
});

const FIREBASE = firebase;

export default FIREBASE;