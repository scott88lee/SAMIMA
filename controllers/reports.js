const purchases = require("../models/purchases");
const products = require("../models/products");
const sales = require("../models/sales");

module.exports = {
  serveDashboard: async (req, res) => {
    res.send("A-Ok!")
  }
}