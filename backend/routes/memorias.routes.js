const express = require('express');
const router = express.Router();
const {getMemorias, addMemoria, deleteMemoria, updateMemoria} = require('../controllers/memoria.controllers.js');

router.get('/all', getMemorias);
router.post('/add', addMemoria);
router.delete('/del/:id', deleteMemoria);
router.patch('/upd/:id', updateMemoria);

module.exports = router;