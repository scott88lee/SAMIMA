const products = require("../models/products");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let result = await products.getAll();
      if (result.length > 0) {
        
        res.render("inventory/products", {
          layout: "invLayout",
          payload: result,
        });
      } else {
        res.render("inventory/products");
      }
    } catch (err) {
      console.log(err);
      res.render("error", { message: err.message });
    }
  },

  newProduct: (req, res) => {
    res.render("inventory/addProduct", { layout: "invLayout" });
  },

  addProduct: async (req, res) => {
    //Sanitize data
    let prod = req.body;

    if (!prod.physical_item) prod.physical_item = false;
    if (prod.msrp) prod.msrp = Number(prod.msrp);
    if (prod.map) prod.map = Number(prod.map);

    try {
      let temp = await products.addProduct(prod)
      res.redirect("/products")
    } 
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message });
    }
  },

  editProduct: async (req, res) => {
    console.log("rendering editPage: " + req.params.id)
    try {
      let result = await products.getById(req.params.id)//here

      res.render("inventory/editProduct", {
        layout: "invLayout",
        product: result[0]
      });
    } catch (err) {
      console.log(err)
      res.render("error", { message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    //Sanitize data
    let prod = req.body;

    if (!prod.physical_item) prod.physical_item = false;
    if (prod.msrp) prod.msrp = Number(prod.msrp);
    if (prod.map) prod.map = Number(prod.map);

    try {
      let result = await products.updateProduct(prod)
      
      res.render("inventory/editProduct", {
        layout: "invLayout",
        message: result[0].brand + " " + result[0].model + ": Successfully updated."
      });
    } catch (err) {
      console.log(err)
      res.render("error", { message: err.message });
    }
  }
};
