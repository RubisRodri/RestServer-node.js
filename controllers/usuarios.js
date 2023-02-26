const { Response } = require('express');


const usuariosGet = (req, res = Response) => {
    
    res.json({
        msg:'get Api-Controlador'
    });
}

const usuariospost = (req, res) => {
    res.json({
        msg:'soy post-contrador'
    });
}

const usuariosPut = (req, res) => {
    res.json({
        msg:'soy put-controlador'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg:'soy patch-controlador'
    });
}

const usuarioDelete = (req, res) => {
    res.json({
        msg:'soy delete-controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariospost,
    usuariosPut,
    usuariosPatch,
    usuarioDelete
}