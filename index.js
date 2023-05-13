const express = require('express');
const connectDB = require('./db');
const routes = require('./routes');

const app = express();

// Conexión a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use(routes);

// Puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}.`);
});
