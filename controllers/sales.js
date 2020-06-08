const products = require("../models/products");

module.exports = {
  serveRoot: (req, res) => {
    res.render("sales/record", {
      layout: "salesLayout",
      message: "Success!",
    });
  }
}