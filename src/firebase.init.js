import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyc-koJ-A7fNCoPJyIXNvsk9EsUq_3HD0",
  authDomain: "hope-light-co.firebaseapp.com",
  projectId: "hope-light-co",
  storageBucket: "hope-light-co.appspot.com",
  messagingSenderId: "921186882513",
  appId: "1:921186882513:web:ab174e455da771dae186f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
