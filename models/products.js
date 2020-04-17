const db = require('../db');

module.exports = {

    getUniqueProduct : (str) => {
        return "Wow! " + str;
    },

	getSomething : (req, res) => {
		const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id INNER JOIN brands ON products.brand = brands.brand_id";

		db.pool.query(queryString, (err, result) => {
	    	if (err) {
	    	console.error('List product Query error:', err.stack);
	   		}
	   		console.log(result.rows);
	    	res.render('products/listAll', {product : result.rows});
		});
    }
}