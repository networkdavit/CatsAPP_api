const express = require('express');
const router = express.Router();
const breeds_controller = require('../controllers/breeds_controller');

router.get("/", breeds_controller.get_all_breeds);

module.exports = router;