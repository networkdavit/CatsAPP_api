const express = require('express');
const router = express.Router();
const quiz_controller = require('../controllers/quiz_controller');

router.get("/", quiz_controller.get_quiz_data);

module.exports = router;