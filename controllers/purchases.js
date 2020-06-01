const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  main: async (req, res) => {
    try {
      let rows = await purchases.getAllCurrentMonth();
      let dateRange = ""
      if (rows.length > 0) {
        dateRange = rows[0].month;
      } 

      res.render("inventory/purchases", { 
        layout: "invLayout",
        purchase: rows,
        dateRange
      });
    }
    catch (err) {
      console.log(err)
      res.render("error", {message: err.message})
    }
  },

  new: async (req, res) => {
    //Only get phsycial items
    try {
      let productList = await products.getAll("physical");
      let s_list = await products.listSuppliers();
      
      res.render("inventory/addPurchase", { 
        layout: "invLayout",
        products: productList,
        supplier: s_list
      });
    } 
    catch (err) {
      console.log(err)
      res.render("error", {message: err.message})
    }
  },

  recordPurchase: async (req, res) => {
    let data = req.body;
    
    let binaryData = Buffer.from(data.payload, "base64");
    // decode buffer as utf8, then JSON.Parse
    data.list = JSON.parse(binaryData.toString("utf8"))
    
    try {
      let message = await purchases.recordPurchase(data)
      if (message) {
        res.redirect("/purchases/new")
      }
    } 
    catch (err) {
      console.log(err);
      res.render("error", {message: err.message})
    }
  },

  serveOutstanding : async (req, res) => {
    try {
      let invoices = await purchases.getOutstandingInvoices()
      res.render('inventory/outstanding')
    } 
    catch (err) {
      console.log(err);
      res.render("error", {message: err.message})
    }
  }
};
