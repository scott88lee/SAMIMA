const products = require('../models/products');

module.exports = {

  getRoot: (req, res) => {
    res.redirect('/sales');
  },

  serveLogin: (req, res) => {
    console.log("Serving log-in")
    res.render('root/login', {layout: "unsecured"})
  },

  authUser: (req, res) => {
    let u = req.body;
    
    if (u.username == 'admin' && u.password == 'qweqwe') {
      req.session.loggedIn = true;
      
      req.session.save(function (err) { //Forces session data to save
        if (err) return next(err)
        res.redirect('/sales')
      })
    } else {
      res.render('root/login', {message: "Invalid name / password"})
    }
  },

  logOut: (req, res) => {
    req.session.loggedIn = false;
    res.redirect('/login')
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
      if ( _ ) {
        res.redirect("/suppliers")
      } else {
        res.render("error", {message: "Unknown error"})
      }
    }
    catch (err) {
      console.log(err)
      res.render("error", { message: err.message });
    }

  },

  testPost: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  },

  testConsole: (req, res) => {
    console.log(req.body);
    res.send({msg:"ok"});
  }
}