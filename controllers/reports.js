const purchases = require("../models/purchases");
const products = require("../models/products");
const sales = require("../models/sales");
const helper =require('../helpers/date');

module.exports = {
  
  serveDashboard: async (req, res) => {
    res.render("reports/dashboard", {layout: "reportLayout"})
  },
  
  serveCOGS: async (req, res) => {
    res.render("reports/cogs", {layout: "reportLayout"})
  },

  searchCOGS: async (req, res) => {
    let body = JSON.stringify(req.body)
    let message = "GEGEGEGSD"

    //let pStack = await purchases.getPurchasesStack()

    res.render("reports/cogs", {layout: "reportLayout", body: body, message: message})
  },
  
  getCurrentInventory: async (req, res) => {
    try {
      let totalPurchases = await purchases.totalPurchasesByProduct();
      let totalSales = await sales.totalSalesByProduct();
      let today = helper.todayDDMMYYYY()

      console.log(totalPurchases)
      console.log(totalSales)

      for (let i in totalPurchases) {
        for (let k in totalSales) {
          if (totalPurchases[i].sku === totalSales[k].sku) {
            totalPurchases[i].total_qty -= totalSales[k].total_qty
            totalSales[k].processed = true;
          }
        }
      }
  
      res.render("reports/invlevel", {layout: "reportLayout", date: today, inv: totalPurchases})
    }
    catch (err) {
      console.log(err)
      res.render("error", {message: err.message})
    }
  }
}