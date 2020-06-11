const products = require("../models/products");
const sales = require("../models/sales");

module.exports = {
  serveRoot: async (req, res) => {
    try {
      let lastInvNo = await sales.getLastInvNum();
      console.log(lastInvNo)
      let productList = await products.getAll("nondepre");
      res.render("sales/record", {
        layout: "salesLayout",
        products: productList,
        current_inv_no: lastInvNo + 1
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message })
    }
  }
}