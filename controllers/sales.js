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
  },

  recordSale: async (req,res) => {
    let data = req.body;
    let binaryData = Buffer.from(data.payload, "base64");
    // decode buffer as utf8, then JSON.Parse
    data.list = JSON.parse(binaryData.toString("utf8"))

    try {
      let message = await sales.recordSale(data)
      if (message) {
        res.redirect("/sales")
      }
    }
    catch (err) {
      console.log(err);
      res.render("error", { message: err.message })
    }
  },

  serveSearch: async(req, res) => {
    try {
      let rows = await sales.getAllDay();
      let dateRange = ""
      if (rows.length > 0) {
        dateRange = rows[0].range;
      }

      res.render("sales/search", {
        layout: "salesLayout",
        sale: rows,
        dateRange
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message })
    }
  }
}