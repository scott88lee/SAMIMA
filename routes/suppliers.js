const express = require("express");
const router = express.Router();
const controller = require("../controllers/suppliers");

// ROUTES
router.get("/new", controller.renderForm);
router.post("/", controller.newEntry);

module.exports = router;
