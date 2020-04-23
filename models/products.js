const db = require('../db');

module.exports = {

	getAll : () => {
		return new Promise( (resolve, reject) => {		
			const queryString = "SELECT * FROM products ORDER BY brand ASC;"
			db.query(queryString, (err, result) => {
	    		if (err) {
	    			reject(err);	
	   			} else {
					resolve(result.rows);
				}
			});
		})
	},

	addProduct : (prod) => {
		return new Promise( (resolve, reject) => {	
			const queryString = "INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('" + prod.sku +"', '" + prod.brand + "', '" + prod.model + "', '" + prod.product_desc + "', " + prod.msrp + ", " + prod.map + ", " + prod.physical_item + ");"
			console.log(queryString);
			
			db.query(queryString, (err, result) => {
	    		if (err) {
	    			reject(err);	
	   			} else {
					resolve(result.rows);
				}
			});
		})
	},
	
	getProduct : (id) => {
        return new Promise( (resolve, reject) => {	
			const queryString = "INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('" + prod.sku +"', '" + prod.brand + "', '" + prod.model + "', '" + prod.product_desc + "', " + prod.msrp + ", " + prod.map + ", " + prod.physical_item + ");"
			console.log(queryString);
			
			db.query(queryString, (err, result) => {
	    		if (err) {
	    			reject(err);	
	   			} else {
					resolve(result.rows);
				}
			});
		})
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