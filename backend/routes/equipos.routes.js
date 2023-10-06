const express = require('express');
const router = express.Router();
const {getEquipos, addEquipo, deleteEquipo, updateEquipo} = require('../controllers/equipo.controllers.js');

router.get('/all', getEquipos);
router.post('/add', addEquipo);
router.delete('/del/:id', deleteEquipo);
router.patch('/upd/:id', updateEquipo);

module.exports = router;