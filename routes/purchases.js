const express = require("express");
const router = express.Router();
const controller = require("../controllers/purchases");
const auth = require("../auth");

// ROUTES
router.get("/", auth.verifySignIn, controller.main);
router.get("/new", auth.verifySignIn, controller.new);
router.post("/", auth.verifySignIn, controller.recordPurchase);

router.post('/search', auth.verifySignIn, controller.search)

router.get("/outstanding", auth.verifySignIn, controller.serveOutstanding);
router.post("/outstanding", auth.verifySignIn, controller.recordPayment);

module.exports = router;
