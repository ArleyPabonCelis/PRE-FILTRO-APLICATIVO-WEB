const express = require('express');
const router = express.Router();
const {getTorres, addTorre, deleteTorre, updateTorre} = require('../controllers/torre.controllers.js');

router.get('/all', getTorres);
router.post('/add', addTorre);
router.delete('/del/:id', deleteTorre);
router.patch('/upd/:id', updateTorre);

module.exports = router;