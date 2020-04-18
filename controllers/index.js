const products = require('../models/products');

module.exports = {

    getRoot : (req, res) => {
        //Serves the body of the page aka "main.handlebars"
        // to the container //aka "index.handlebars"
        res.render('main');
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