const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

// ROUTES
router.get('/', indexController.getRoot);
router.get('/suppliers', indexController.getSuppliers);

router.post('/test', indexController.testPost);

module.exports = router;