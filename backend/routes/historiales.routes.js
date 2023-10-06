const express = require('express');
const router = express.Router();
const {getHistoriales, addHistorial, deleteHistorial, updateHistorial} = require('../controllers/historiale.controllers.js');

router.get('/all', getHistoriales);
router.post('/add', addHistorial);
router.delete('/del/:id', deleteHistorial);
router.patch('/upd/:id', updateHistorial);

module.exports = router;