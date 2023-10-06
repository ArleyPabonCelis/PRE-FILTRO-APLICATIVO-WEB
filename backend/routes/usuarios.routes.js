const express = require('express');
const router = express.Router();
const {getUsuarios, addUsuario, deleteUsuario, updateUsuario} = require('../controllers/usuario.controllers.js');

router.get('/all', getUsuarios);
router.post('/add', addUsuario);
router.delete('/del/:id', deleteUsuario);
router.patch('/upd/:id', updateUsuario);

module.exports = router;