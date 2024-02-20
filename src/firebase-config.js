import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyA3i4fZFTlm-LjRoPe7BaP0wR_NFcw7L6U",
  authDomain: "hyunhyunilju.firebaseapp.com",
  projectId: "hyunhyunilju",
  storageBucket: "hyunhyunilju.appspot.com",
  messagingSenderId: "1001594122407",
  appId: "1:1001594122407:web:866ddb08733d0f85832b82",
  measurementId: "G-5BLCSXKD87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
