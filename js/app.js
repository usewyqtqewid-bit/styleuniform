// app.js — Firebase init (opcional) + helpers globales
let firebaseApp = null;
let firebaseReady = false;

async function loadFirebaseConfig(){
  try{
    const res = await fetch("./data/firebase_config.json", { cache: "no-cache" });
    if(!res.ok) throw new Error("No existe /data/firebase_config.json");
    const cfg = await res.json();
    const [{ initializeApp }] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
    ]);
    firebaseApp = initializeApp(cfg);
    firebaseReady = true;
    console.log("✅ Firebase inicializado");
  }catch(err){
    console.warn("⚠️ Modo sin Firebase:", err.message);
  }
}
loadFirebaseConfig();

window.isFirebaseReady = () => firebaseReady;
window.getFirebaseApp  = () => firebaseApp;