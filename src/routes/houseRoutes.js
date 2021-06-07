const express = require('express');
const router = express.Router();

const houseController = require('../controllers/houseController');

router.get('/new', houseController.house_new);

module.exports = router;
