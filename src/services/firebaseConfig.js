// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk13LaBhQW-NIFo3VUYAXJ-fd_se70iGw",
  authDomain: "ecommerce-react-694ee.firebaseapp.com",
  projectId: "ecommerce-react-694ee",
  storageBucket: "ecommerce-react-694ee.appspot.com",
  messagingSenderId: "771551627992",
  appId: "1:771551627992:web:b7d8ed41f5c5249c79e5ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);