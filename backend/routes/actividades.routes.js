const express = require('express');
const router = express.Router();
const {getActividades, addActividad, deleteActividad, updateActividad} = require('../controllers/actividade.controllers.js');

router.get('/all', getActividades);
router.post('/add', addActividad);
router.delete('/del/:id', deleteActividad);
router.patch('/upd/:id', updateActividad);

module.exports = router;