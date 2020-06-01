const express = require("express");
const router = express.Router();
const controller = require("../controllers/purchases");
const auth = require("../auth");

// ROUTES
router.get("/", auth.verifySignIn, controller.main);
router.get("/new", auth.verifySignIn, controller.new);
router.post("/", auth.verifySignIn, controller.recordPurchase);

router.get("/outstanding", auth.verifySignIn, controller.serveOutstanding);

module.exports = router;
