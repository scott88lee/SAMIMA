const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

const auth = function(req, res, next) {
    console.log(req.session)
    if (req.session.loggedIn === true)
      return next();
    else
      res.redirect('/login');
  };

// ROUTES
router.get('/', auth, indexController.getRoot);
router.get('/login', indexController.serveLogin);
router.post('/login', indexController.authUser);
router.get('/logout', indexController.logOut);


router.get('/suppliers', indexController.getSuppliers);
router.post('/suppliers', indexController.addSupplier);

router.post('/test', indexController.testPost);


module.exports = router;