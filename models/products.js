const db = require('../db');

module.exports = {

	getAll : () => {
		return new Promise( (resolve, reject) => {		
			const queryString = "SELECT * FROM products"
		
			db.query(queryString, (err, result) => {
	    		if (err) {
	    			console.error('List product Query error:', err.stack);
					reject(err);	
	   			} else {
					resolve(result.rows);
				}
			});
		})
	},
	
	getUniqueProduct : (str) => {
        return "Wow! " + str;
    },

	getSomething : (req, res) => {
		const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id INNER JOIN brands ON products.brand = brands.brand_id";

		db.query(queryString, (err, result) => {
	    	if (err) {
	    	console.error('List product Query error:', err.stack);
	   		}
	   		console.log(result.rows);
	    	res.render('products/listAll', {product : result.rows});
		});
    }
}