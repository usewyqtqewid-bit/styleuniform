StyleUniform — Deploy rápido Firebase Hosting (proyecto: yerba-ac4e5)

1) npm install -g firebase-tools
   firebase login

2) Parate en la carpeta que CONTIENE 'public/':
   cd C:\ruta\a\tu\proyecto

3) Copiá estos archivos (incluye .firebaserc y firebase.json) a esa carpeta.

4) (Opcional) Reglas
   firebase deploy --only firestore:rules,storage:rules

5) Hosting
   firebase deploy --only hosting

Abrí la URL que muestre la consola (ej: https://yerba-ac4e5.web.app)
