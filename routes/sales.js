const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const auth = require('../auth');

router.get('/', auth.verifySignIn, indexController.getRoot);

module.exports = router;