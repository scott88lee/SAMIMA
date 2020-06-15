const express = require('express');
const router = express.Router();
const controller = require('../controllers/reports');
const auth = require('../auth');

router.get('/', auth.verifySignIn, controller.serveDashboard);

module.exports = router;