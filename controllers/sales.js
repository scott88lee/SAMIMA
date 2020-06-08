const products = require("../models/products");

module.exports = {
  serveRoot: (req, res) => {
    res.render("sales/main", {
      layout: "salesLayout",
      message: "Success!",
    });
  }
}