const express = require('express');
const router = express.Router();
const controller = require('../controllers/reports');
const auth = require('../auth');

router.get('/', auth.verifySignIn, controller.serveDashboard);
router.get('/invlevel', auth.verifySignIn, controller.getCurrentInventory);
router.get('/cogs', auth.verifySignIn, controller.serveCOGS);
router.post('/cogs', auth.verifySignIn, controller.searchCOGS);

module.exports = router;