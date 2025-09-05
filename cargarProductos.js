// 🚀 Script para cargar productos.json a Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase (la misma que en index.html)
const firebaseConfig = {
  apiKey: "AIzaSyAKdWohLlZ7ngujKtowNUe1YcVPkZ3z-WQ",
  authDomain: "styleuniform-95019.firebaseapp.com",
  projectId: "styleuniform-95019",
  storageBucket: "styleuniform-95019.firebasestorage.app",
  messagingSenderId: "604291853776",
  appId: "1:604291853776:web:de9f86d73774eaea421dd5",
  measurementId: "G-JJCHZWNNZ7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Leer el archivo productos.json y subirlo a Firestore
async function cargarProductos() {
  const res = await fetch("productos.json");
  const productos = await res.json();

  for (let p of productos) {
    try {
      await addDoc(collection(db, "productos"), p);
      console.log(`✅ Producto agregado: ${p.nombre}`);
    } catch (e) {
      console.error("❌ Error al agregar producto: ", e);
    }
  }
}

cargarProductos();
