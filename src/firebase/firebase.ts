import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6j0HbyW91A_Q-QgM_1uMPVG4hncObL20",
  authDomain: "leetcode-clone-e583b.firebaseapp.com",
  projectId: "leetcode-clone-e583b",
  storageBucket: "leetcode-clone-e583b.appspot.com",
  messagingSenderId: "776738502300",
  appId: "1:776738502300:web:5d2c0ec4168f6780951f59S"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp(); 
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, app} 