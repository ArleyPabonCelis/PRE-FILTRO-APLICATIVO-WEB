const express = require('express');
const router = express.Router();
const {getTeclados, addTeclado, deleteTeclado, updateTeclado} = require('../controllers/teclado.controllers.js');

router.get('/all', getTeclados);
router.post('/add', addTeclado);
router.delete('/del/:id', deleteTeclado);
router.patch('/upd/:id', updateTeclado);

module.exports = router;