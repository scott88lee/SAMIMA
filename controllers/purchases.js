const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  getAll: (req, res) => {
    res.send("GetAll");
  },

  new: async  (req, res) => {
    //Only get phsycial items
    let productList = await products.getAll("physical");
    let s_list = await products.listSuppliers();
    
    res.render("inventory/addPurchase", { 
      layout: "invLayout",
      products: productList,
      supplier: s_list
    });
  },

  recordPurchase: async (req, res) => {
    let data = req.body;
    
    let binaryData = Buffer.from(data.payload, "base64");
    // decode buffer as utf8, then JSON.Parse
    data.list = JSON.parse(binaryData.toString("utf8"))
    
    try {
      let message = await purchases.recordPurchase(data)
      if (message) {
        res.render("inventory/addPurchase", 
        { layout: "invLayout",
          message: message
        })
      }
    } catch {
      console.log(err)
      res.render("inventory/addPurchase", 
        { layout: "invLayout",
          message: message
      })
    }
  }
};
