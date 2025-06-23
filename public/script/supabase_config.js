import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkHjySY2bKGIuAbVGaAVZCPwJW0AEljoU",
  authDomain: "enrique-s-personal-website.firebaseapp.com",
  projectId: "enrique-s-personal-website",
  storageBucket: "enrique-s-personal-website.firebasestorage.app",
  messagingSenderId: "689946183163",
  appId: "1:689946183163:web:7f250ee1eef4427eea775e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const visitasRef = doc(db, "visitas", "contador");

updateDoc(visitasRef, {
  cantidad: increment(1)
}).catch(console.error);