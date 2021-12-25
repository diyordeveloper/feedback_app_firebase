import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0A2qwrgdDUaAfIYNHyDSHUZFLXZatgOI",
  authDomain: "feedback-31ba1.firebaseapp.com",
  projectId: "feedback-31ba1",
  storageBucket: "feedback-31ba1.appspot.com",
  messagingSenderId: "323977744451",
  appId: "1:323977744451:web:f0de22732cb00b1a70c4f6",
  measurementId: "G-4ZBZ3WGWYN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuth = getAuth(app);
