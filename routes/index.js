const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const auth = require('../auth');

// ROUTES
router.get('/', auth.verifySignIn, indexController.getRoot);
router.get('/login', indexController.serveLogin);
router.post('/login', indexController.authUser);
router.get('/logout', indexController.logOut);


router.get('/suppliers', auth.verifySignIn, indexController.getSuppliers);
router.post('/suppliers', auth.verifySignIn, indexController.addSupplier);

router.post('/test', auth.verifySignIn, indexController.testPost);


module.exports = router;