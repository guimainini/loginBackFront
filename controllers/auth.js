const { response } = require('express');


const createUser = (req, res = response) =>  {

    const { email, name, pass } = req.body;

    return res.json({
        ok  : true,
        msg : 'Crear usuario /new'
    })

}

const loginUser = (req, res = response) =>  {

    const { email, pass } = req.body;

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



