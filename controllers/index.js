const products = require('../models/products');

module.exports = {

  getRoot: (req, res) => {
    //Serves the body of the page aka "main.handlebars"
    // to the container //aka "index.handlebars"
    res.render('main');
  },

  getSuppliers: async (req, res) => {
    try {
      let suppliers_list = await products.listSuppliers();
      console.log(suppliers_list);
      res.render("inventory/suppliers", { supplier: suppliers_list, layout: "invLayout" });
    } catch {
      console.log(err);
      res.render("inventory/suppliers", { message: err, layout: "invLayout" });
    }
  },

  addSupplier: async (req,res) => {
    let _ = await products.addSupplier(req.body);

    res.redirect("/suppliers")
  },

  testPost: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
}