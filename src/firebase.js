import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDoc } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   databaseURL: "https://portofolio-web-3e8e8-default-rtdb.firebaseio.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.firebasestorage.app",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
//  };

const firebaseConfig = {
  apiKey: "AIzaSyBy1M3Q-_VEOqGKo_NgXPkIKHxJpELbNGc",
  authDomain: "portofolio-aldy.firebaseapp.com",
  projectId: "portofolio-aldy",
  storageBucket: "portofolio-aldy.appspot.com",
  messagingSenderId: "516940032572",
  appId: "1:516940032572:web:bba9c06b0e795c28bb3139",
  measurementId: "G-T2L30JSFXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };