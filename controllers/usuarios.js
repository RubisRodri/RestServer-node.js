const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = "no name", apellido, limit=10, page=1 } = req.query;

    res.json({
        msg:'get Api-Controlador',
        q,
        nombre,
        apellido,
        limit,
        page
    });
}

const usuariospost = (req, res) => {
    const { nombre, edad, apellido} = req.body;

    res.json({
        msg:'soy post-contrador',
        nombre, 
        edad,
        apellido
    });
}

const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.json({
        msg:'soy put-controlador',
        id
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