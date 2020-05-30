const products = require('../models/products');

module.exports = {

  getRoot: (req, res) => {
    res.render('main');
  },

  serveLogin: (req, res) => {
    res.render('root/login', {layout: "unsecured"})
  },

  getSuppliers: async (req, res) => {
    try {
      let suppliers_list = await products.listSuppliers();
      res.render("inventory/suppliers", { supplier: suppliers_list, layout: "invLayout" });
    } 
    catch (err) {
      console.log(err);
      res.render("error", { message: err.message });
    }
  },

  addSupplier: async (req,res) => {
    try {
      let _ = await products.addSupplier(req.body);
      if ( _ ) {
        res.redirect("/suppliers")
      } else {
        res.render("error", {message: "Unknown error"})
      }
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message });
    }

  },

  testPost: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
}