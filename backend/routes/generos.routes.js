const express = require('express');
const router = express.Router();
const {getGeneros} = require('../controllers/genero.controllers.js');

router.get('/all', getGeneros);


module.exports = router;