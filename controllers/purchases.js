const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  main: async (req, res) => {
    try {
      let rows = await purchases.getAllCurrentMonth();
      
      let mock = [
          {
            date: "12/5/2020",
            inv_no: "SA123456",
            supplier: "Yamaha",
            total:3123.23,
            credit: true,
            paid: true,
            items: [
              {
                sku: "6914973600362",
                brand: "Mars",
                model: "Snickers",
                qty: 5,
                price: 1,
                subtotal: 5
              },
              {
                sku: "6914973600362",
                brand: "Mars",
                model: "Snickers",
                qty: 5,
                price: 2,
                subtotal: 10
              }
            ]
          },
          {
            date: "13/5/2020",
            inv_no: "SA512341",
            supplier: "CityMusic",
            total: 1123.22,
            credit: true,
            paid: false,
            items: [
              {
                name: "first item",
                price: "$1"
              },
              {
                name: "second item",
                price: "$2"
              },
            ]
          }
        ]
      
        console.log(mock[0]);

      res.render("inventory/purchases", { 
        layout: "invLayout",
        purchase: mock
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
  }
};
