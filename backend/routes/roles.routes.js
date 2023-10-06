const express = require('express');
const router = express.Router();
const {getRoles, addRol, deleteRol, updateRol} = require('../controllers/role.controllers.js');

router.get('/all', getRoles);
router.post('/add', addRol);
router.delete('/del/:id', deleteRol);
router.patch('/upd/:id', updateRol);

module.exports = router;