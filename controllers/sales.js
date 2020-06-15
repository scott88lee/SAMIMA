const products = require("../models/products");
const sales = require("../models/sales");

module.exports = {
  serveRoot: async (req, res) => {
    try {
      let lastInvNo = await sales.getLastInvNum();
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

      let grandTotal = 0;
      for (let i in rows) {
        grandTotal += Number(rows[i].total);
      }

      grandTotal = Math.round((grandTotal + Number.EPSILON) * 100) / 100

      res.render("sales/search", {
        layout: "salesLayout",
        sale: rows,
        total: grandTotal,
        dateRange
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message })
    }
  },

  search: async (req, res) => {
    try {
      let rows = await sales.search(req.body);
      function compare(b, a) {
        if (a.sort < b.sort) return -1;
        if (a.sort > b.sort) return 1;
        return 0;
      }
      rows.sort(compare);
      let dateRange = "No results"
      if (rows.length > 0) {
        dateRange = rows[0].range;
      }

      let grandTotal = 0;
      for (let i in rows) {
        grandTotal += Number(rows[i].total);
      }
      grandTotal = Math.round((grandTotal + Number.EPSILON) * 100) / 100



      res.render("sales/search", {
        layout: "salesLayout",
        sale: rows,
        total: grandTotal,
        dateRange
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message })
    }
  }
}