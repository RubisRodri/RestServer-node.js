const { Router } = require('express');

const { usuariosGet,
    usuariospost,
    usuariosPut,
    usuariosPatch,
    usuarioDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.post('/',usuariospost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuarioDelete);


module.exports = router;