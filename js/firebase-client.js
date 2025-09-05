// Inicialización de Firebase en el cliente (opcional).
// Si apiKey está vacío, el sitio funciona en modo local con productos.json.
import config from './firebase-config.js';

let app = null, db = null, storage = null;

if (config.apiKey && config.projectId) {
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
  const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
  const { getStorage } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
  app = initializeApp(config);
  db = getFirestore(app);
  storage = getStorage(app);
  console.log("✅ Firebase inicializado");
} else {
  console.log("ℹ️ Modo local: usando /catalogo/productos.json");
}

export { app, db, storage };
