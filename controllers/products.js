const products = require("../models/products");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let result = await products.getAll();
      if (result.length > 0) {
        console.log("Query success, rendering results");
        res.render("partials/productList", {
          layout: "invLayout",
          payload: result,
        });
      } else {
        res.render("partials/productList");
      }
    } catch (err) {
      console.log(err);
      res.render("main");
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
      console.log(temp);
      res.render("inventory/addProduct", {
        layout: "invLayout",
        message: "Sucessfulled added."
      });
    } catch (err) {
      res.render("inventory/addProduct", {
        layout: "invLayout",
        message: "Failed to add product."
      });
    }
  },

  editProduct: async (req, res) => {
    console.log("rendering editPage: " + req.params.id)
    try {
      let result = await products.getById(req.params.id)//here
      console.log(result[0]);

      res.render("inventory/editProduct", {
        layout: "invLayout",
        product: result[0]
      });
    } catch {
      // res.render("addProduct", { 
      //   layout: "invLayout", 
      //   message: "Error, fail to add product." 
      // });
    }
  },

  updateProduct: async (req, res) => {
    //Sanitize data
    let prod = req.body;

    if (!prod.physical_item) prod.physical_item = false;
    if (prod.msrp) prod.msrp = Number(prod.msrp);
    if (prod.map) prod.map = Number(prod.map);

    console.log(prod)
    try {
      let result = await products.updateProduct(prod)
      console.log(result[0]);
      res.render("inventory/editProduct", {
        layout: "invLayout",
        message: result[0].brand + " " + result[0].model + ": Successfully updated."
      });
    } catch (err) {
      console.log(err)
      res.render("inventory/editProduct", {
        layout: "invLayout",
        message: "Failed to update product."
      });
    }
  }
};
