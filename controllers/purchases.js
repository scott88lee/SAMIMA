const products = require("../models/products");
const purchases = require("../models/purchases");

module.exports = {
  getAll: (req, res) => {
    res.send("GetAll");
  },

  new: (req, res) => {
    let d = new Date();
    let dateStamp = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
    console.log(dateStamp);

    res.render("addPurchase", { layout: "invLayout" });
  },
};
