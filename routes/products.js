const express = require("express");
const router = express.Router();
const controller = require("../controllers/products");
const auth = require("../auth");

// ROUTES
router.get("/", auth.verifySignIn, controller.getAllProducts);
router.get("/new", auth.verifySignIn, controller.newProduct);
router.post("/new", auth.verifySignIn, controller.addProduct);

router.get("/:id/edit", auth.verifySignIn, controller.editProduct);
router.post("/:id", auth.verifySignIn, controller.updateProduct);

module.exports = router;
