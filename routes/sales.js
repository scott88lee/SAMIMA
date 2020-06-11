const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');
const auth = require('../auth');

router.get('/', auth.verifySignIn, controller.serveRoot);
router.post('/', auth.verifySignIn, controller.recordSale);

module.exports = router;