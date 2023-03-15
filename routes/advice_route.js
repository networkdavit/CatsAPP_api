const express = require('express');
const router = express.Router();
const advice_controller = require('../controllers/advice_controller');

router.get("/", advice_controller.get_all_advice);

module.exports = router;