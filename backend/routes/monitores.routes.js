const express = require('express');
const router = express.Router();
const {getMonitores, addMonitor, deleteMonitor, updateMonitor} = require('../controllers/monitore.controllers.js');

router.get('/all', getMonitores);
router.post('/add', addMonitor);
router.delete('/del/:id', deleteMonitor);
router.patch('/upd/:id', updateMonitor);

module.exports = router;