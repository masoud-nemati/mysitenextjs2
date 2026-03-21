// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // ← این را از Firebase Console بگیر
  authDomain: "my-next-site-dd4cd.firebaseapp.com",
  projectId: "my-next-site-dd4cd",
  storageBucket: "my-next-site-dd4cd.appspot.com",
  messagingSenderId: "78285173882",
  appId: "YOUR_APP_ID", // ← این را از Firebase Console بگیر
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);