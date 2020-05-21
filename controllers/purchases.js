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
    //Convert base64 payload to JSON object
    // base64 encoded input string
    let str = data.payload
    // create buffer from base64 string
    let binaryData = Buffer.from(str, "base64");
    // decode buffer as utf8, then JSON.Parse
    data.list = JSON.parse(binaryData.toString("utf8"))
    
    res.send("Purchase successfully added. " + JSON.stringify(data))
  }
};
