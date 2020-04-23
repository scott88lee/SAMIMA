const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  getAll: (req, res) => {
    res.send("GetAll")
  },

  new: (req, res) => {
    res.render("newPurchase", { layout: "invLayout" });
  }
};
