const express = require('express');
const router = express.Router();
const {getFeedbacks, addFeedback, deleteFeedback, updateFeedback} = require('../controllers/feedback.controllers.js');

router.get('/all', getFeedbacks);
router.post('/add', addFeedback);
router.delete('/del/:id', deleteFeedback);
router.patch('/upd/:id', updateFeedback);

module.exports = router;