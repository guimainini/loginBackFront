
const express = require ('express');

// Crear el servidor/aplicacion de express
const app = express();


// peticion GET
app.get('/', ( req, res ) => {

    console.log('Peticion en el /');

    res.json({
        ok  : true,
        msg : 'Todo salio bien',
        uid : 1234
    })

});




app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});






