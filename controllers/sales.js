const products = require("../models/products");

module.exports = {
  serveRoot: async (req, res) => {
    try {
      let productList = await products.getAll("nondepre");
      res.render("sales/record", {
        layout: "salesLayout",
        products: productList
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message })
    }
  }
}