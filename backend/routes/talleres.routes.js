const express = require('express');
const router = express.Router();
const {getTalleres, addTaller, deleteTaller, updateTaller} = require('../controllers/tallere.controllers.js');

router.get('/all', getTalleres);
router.post('/add', addTaller);
router.delete('/del/:id', deleteTaller);
router.patch('/upd/:id', updateTaller);

module.exports = router;