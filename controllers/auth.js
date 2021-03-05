const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) =>  {

    const errors = validationResult ( req );
    if( !errors.isEmpty()) {
        return res.status(400).json({
            ok : false,
            msg: errors.mapped()
        });
    }

    const { email, name, pass } = req.body;
    console.log(email, name, pass);

    return res.json({
        ok  : true,
        msg : 'Crear usuario /new'
    })

}

const loginUser = (req, res = response) =>  {

    const errors = validationResult ( req );
    if( !errors.isEmpty()) {
        return res.status(400).json({
            ok : false,
            msg: errors.mapped()
        });
    }

    const { email, pass } = req.body;
    console.log(email, pass);

    return res.json({
        ok  : true,
        msg : 'Login de User /'
    })

}

const revalidateToken = (req, res = response) =>  {

    return res.json({
        ok  : true,
        msg : 'Renew'
    })

}



module.exports = {
    createUser,
    loginUser,
    revalidateToken
}



