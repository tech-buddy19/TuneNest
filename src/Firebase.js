
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCshnlePaqvYqD5f3wuDqZu94dKcuR4kbo",
  authDomain: "tunenest-a656f.firebaseapp.com",
  databaseURL: "https://tunenest-a656f-default-rtdb.firebaseio.com",
  projectId: "tunenest-a656f",
  storageBucket: "tunenest-a656f.firebasestorage.app",
  messagingSenderId: "859270031049",
  appId: "1:859270031049:web:0d6c735ac7d1772c448f18"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };