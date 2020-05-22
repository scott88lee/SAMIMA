const products = require('../models/products');

module.exports = {

  getRoot: (req, res) => {
    res.render('main');
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
      res.redirect("/suppliers")
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