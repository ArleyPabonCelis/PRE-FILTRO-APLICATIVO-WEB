const express = require('express');
const router = express.Router();
const {getEstados, addEstado, deleteEstado, updateEstado} = require('../controllers/estado.controllers.js');

router.get('/all', getEstados);
router.post('/add', addEstado);
router.delete('/del/:id', deleteEstado);
router.patch('/upd/:id', updateEstado);

module.exports = router;