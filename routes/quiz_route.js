const express = require('express');
const router = express.Router();
const quiz_controller = require('../controllers/quiz_controller');

router.get("/", quiz_controller.get_quiz_data);
router.get("/result", quiz_controller.get_result);


module.exports = router;