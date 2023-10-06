const express = require('express');
const router = express.Router();
const {getOtros, addOtro, deleteOtro, updateOtro} = require('../controllers/otro.controllers.js');

router.get('/all', getOtros);
router.post('/add', addOtro);
router.delete('/del/:id', deleteOtro);
router.patch('/upd/:id', updateOtro);

module.exports = router;