const express = require('express');
const router = express.Router();
const {getRatones, addRaton, deleteRaton, updateRaton} = require('../controllers/ratone.controllers.js');

router.get('/all', getRatones);
router.post('/add', addRaton);
router.delete('/del/:id', deleteRaton);
router.patch('/upd/:id', updateRaton);

module.exports = router;