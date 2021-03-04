const { response } = require('express');

const createUser = (req, res) =>  {

    const { email, name, pass } = req.body;
    console.log(email, name, pass);

    return res.json({
        ok  : true,
        msg : 'Crear usuario /new'
    })

}

const loginUser = (req, res) =>  {

    const { email, pass } = req.body;
    console.log(email, pass);

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



