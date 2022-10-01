const express = require('express');
const path = require('path');

// Inicializaciones
const app = express();


// Configuraciones
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./routes/index.routes'));


// Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;