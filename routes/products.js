const express = require("express");
const router = express.Router();
const controller = require("../controllers/products");

// ROUTES
router.get("/", controller.getAllProducts);
router.get("/new", controller.newProduct);
router.post("/new", controller.addProduct);

module.exports = router;
