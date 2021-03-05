
const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
//middleware  va en el medio 
router.post( '/new',[
    check('email', 'El mail es obligatorio').isEmail(),
    check('pass', 'El Pass es obligatorio').isLength({ min: 6 }),
    check('name', 'El Nombre es obligatorio').not().isEmpty()
] ,createUser );

//Middleware es software que se sitúa entre un sistema operativo y 
//las aplicaciones que se ejecutan en él. Básicamente, funciona como una 
//capa de traducción oculta para permitir la comunicación y la administración de 
//datos en aplicaciones distribuidas.

//  Login de usuario
//middleware  va en el medio 
router.post( '/', [
    check('email', 'El mail es obligatorio').isEmail(),
    check('pass', 'El Pass es obligatorio').isLength({ min: 6 })
] ,loginUser);

//  Validar y revalidar token
router.get( '/renew', revalidateToken);



module.exports = router;



