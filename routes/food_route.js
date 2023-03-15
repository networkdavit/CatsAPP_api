const express = require('express');
const router = express.Router();
const food_controller = require('../controllers/food_controller');

router.get("/food", food_controller.get_all_food);

module.exports = router;