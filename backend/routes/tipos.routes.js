const express = require('express');
const router = express.Router();
const {getTipos, addTipo, deleteTipo, updateTipo} = require('../controllers/tipo.controllers.js');

router.get('/all', getTipos);
router.post('/add', addTipo);
router.delete('/del/:id', deleteTipo);
router.patch('/upd/:id', updateTipo);

module.exports = router;