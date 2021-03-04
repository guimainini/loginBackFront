
const express = require ('express');
const cors    = require('cors');
require('dotenv').config();

// Crear el servidor/aplicacion de express
const app = express();

//Directorio Publico
app.use( express.static('public') );


// CORS
app.use( cors() );

// Lectura y parseo del body middleware
app.use( express.json() );

//Rutas // el use es un middleware
app.use( '/api/auth', require('./routes/auth') );




app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






