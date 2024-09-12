import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA83OKU_-Eu2G4hhwy77BQW2H4lb4lrInQ",
  authDomain: "chawalwala-pos.firebaseapp.com",
  projectId: "chawalwala-pos",
  storageBucket: "chawalwala-pos.appspot.com",
  messagingSenderId: "174432836803",
  appId: "1:174432836803:web:f85460595e418ab7ecd676",
  measurementId: "G-DQS7KNWJB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const db = getFirestore(app);