import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("form-producto").addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(e.target));
  const id = "producto_" + Date.now();

  const producto = {
    ...datos,
    precio: parseFloat(datos.precio),
    stock: parseInt(datos.stock),
    fecha_registro: new Date().toISOString(),
    registrado_por: "guardian_de_publicación.js"
  };

  set(ref(db, "productos/" + id), producto)
    .then(() => {
      mostrarVistaPrevia(producto);
      registrarEnBitacora(producto);
    })
    .catch((error) => {
      console.error("Error al registrar:", error);
    });
});

function mostrarVistaPrevia(producto) {
  const preview = document.getElementById("producto-preview");
  preview.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen_url}" alt="${producto.nombre}" width="200" />
    <p>${producto.descripcion}</p>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Stock:</strong> ${producto.stock}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p>
  `;
}

function registrarEnBitacora(producto) {
  console.log("Evento registrado en bitácora:", producto);
  // Aquí podrías guardar en otro nodo Firebase o archivo local si lo deseás
}

