const products = require('../models/products');

module.exports = {

  getRoot: (req, res) => {
    //Serves the body of the page aka "main.handlebars"
    // to the container //aka "index.handlebars"
    res.render('main');
  },

  getSuppliers: (req, res) => {
    res.render("suppliers", { layout: "invLayout" });
  },

  testPost: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
}