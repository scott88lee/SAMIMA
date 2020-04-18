const products = require('../models/products');

module.exports = {

    getAllProducts : async (req, res) => {
        try {
            let payload = await products.getAll()
            console.log(payload);
        }
        catch(err) {
            console.log(err);
        }
        finally{
            console.log("finally")
            res.render('main');
        }
    },

    getGroot : (req, res) => {
        //Serves the body of the page aka "main.handlebars"
        // to the container //aka "index.handlebars"
        res.render('main', { layout: 'index' });
    },

    getWeaser : (req, res) => {
        //Serves the body of the page aka "main.handlebars"
        // to the container //aka "index.handlebars"
        let result = products.getUniqueProduct('This is the best product I assure you')

        res.render('main', { yay: result });
    }
}