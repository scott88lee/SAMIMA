const products = require('../models/products');

module.exports = {

    getAllProducts : async (req, res) => {
        try {
            let result = await products.getAll()
            if (result.length > 0) {
                console.log("Query success, rendering results")
                res.render('main', {payload: result});
            } else {
                res.render('main');
            }
        }
        catch(err) {
            console.log(err);
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