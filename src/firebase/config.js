// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUg7PtF9q_lXdqgYFu2vF6q53eDOsQMVs",
  authDomain: "nhyiraba-foundation.firebaseapp.com",
  projectId: "nhyiraba-foundation",
  storageBucket: "nhyiraba-foundation.appspot.com",
  messagingSenderId: "460189020164",
  appId: "1:460189020164:web:68932b253b2f0b30480551",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);