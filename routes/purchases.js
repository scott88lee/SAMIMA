const express = require("express");
const router = express.Router();
const controller = require("../controllers/purchases");

// ROUTES
router.get("/", controller.getAll);
router.get("/new", controller.new);

module.exports = router;
