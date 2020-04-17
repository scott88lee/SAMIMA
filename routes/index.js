const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

// ROUTES
router.get('/', indexController.getRoot);
router.get('/weaser', indexController.getWeaser);

module.exports = router;