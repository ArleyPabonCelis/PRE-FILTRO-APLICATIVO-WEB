const express = require('express');
const router = express.Router();
const {getSoportes, addSoporte, deleteSoporte, updateSoporte} = require('../controllers/soporte.controllers.js');

router.get('/all', getSoportes);
router.post('/add', addSoporte);
router.delete('/del/:id', deleteSoporte);
router.patch('/upd/:id', updateSoporte);

module.exports = router;