const express = require('express');
const router = express.Router();
const games_controller = require('../controllers/games_controller');

router.get("/", games_controller.get_all_games);

module.exports = router;