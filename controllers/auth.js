const { response } = require('express');

const createUser = (req, res) =>  {

    return res.json({
        ok  : true,
        msg : 'Crear usuario /new'
    })

}

const loginUser = (req, res) =>  {

    return res.json({
        ok  : true,
        msg : 'Login de User /'
    })

}

const revalidateToken = (req, res) =>  {

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



