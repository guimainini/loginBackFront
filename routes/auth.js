
const { Router } = require('express');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/new', createUser );

//  Login de usuario
router.post( '/', loginUser);

//  Validar y revalidar token
router.get( '/renew', revalidateToken);



module.exports = router;



