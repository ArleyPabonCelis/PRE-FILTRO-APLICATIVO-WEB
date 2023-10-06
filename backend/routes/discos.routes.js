const express = require('express');
const router = express.Router();
const {getDiscos, addDisco, deleteDisco, updateDisco} = require('../controllers/disco.controllers.js');

router.get('/all', getDiscos);
router.post('/add', addDisco);
router.delete('/del/:id', deleteDisco);
router.patch('/upd/:id', updateDisco);

module.exports = router;