import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOjkZd8rzPcgl1ab9b9RkCkSJbfb43Fl8",
  authDomain: "clique-564bb.firebaseapp.com",
  projectId: "clique-564bb",
  storageBucket: "clique-564bb.appspot.com",
  messagingSenderId: "100200666101",
  appId: "1:100200666101:web:cf7760c5d7dc179e6e86bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};