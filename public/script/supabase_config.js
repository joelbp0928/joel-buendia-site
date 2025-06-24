// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  updateDoc,
  increment,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkHjySY2bKGIuAbVGaAVZCPwJW0AEljoU",
  authDomain: "enrique-s-personal-website.firebaseapp.com",
  projectId: "enrique-s-personal-website",
  storageBucket: "enrique-s-personal-website.firebasestorage.app",
  messagingSenderId: "689946183163",
  appId: "1:689946183163:web:7f250ee1eef4427eea775e"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencia al documento contador
const contadorRef = doc(db, "visitas", "contador");

// Incrementa el contador
updateDoc(contadorRef, {
  cantidad: increment(1)
}).catch((error) => {
  console.error("Error al incrementar contador:", error);
});

// Obtener IP, país y navegador
fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(async data => {
    const infoVisita = {
      timestamp: serverTimestamp(), // Hora del servidor (confiable)
      ip: data.ip || "desconocida",
      pais: data.country_name || "desconocido",
      navegador: navigator.userAgent
    };

    // Guarda en subcolección: visitas > contador > registros
    await addDoc(collection(db, "visitas", "contador", "registro"), infoVisita);
  })
  .catch(err => {
    console.error("Error obteniendo datos del visitante:", err);
  });
