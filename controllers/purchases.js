const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  getAll: (req, res) => {
    res.send("GetAll");
  },

  new: async  (req, res) => {
    let productList = await products.getAll();
    res.render("addPurchase", { 
      layout: "invLayout",
      products: productList
    });
  },
};
