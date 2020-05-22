const db = require('../db');

module.exports = {

	getAll: (str) => {
		return new Promise((resolve, reject) => {
			let queryString = "SELECT * FROM products ORDER BY brand ASC;"
			if (str) {
				queryString = "SELECT * FROM products WHERE physical_item=TRUE ORDER BY brand ASC;"
			}
			
			console.log(str)
			db.query(queryString, (err, result) => {
				if (err) {
					console.log("Query failed.")
					reject(err);
				} else {
					console.log("Query successful.")
					resolve(result.rows);
				}
			});
		})
	},

	addProduct: (prod) => {
		return new Promise((resolve, reject) => {
			const queryString = "INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('" + prod.sku + "', '" + prod.brand + "', '" + prod.model + "', '" + prod.product_desc + "', " + prod.msrp + ", " + prod.map + ", " + prod.physical_item + ");"
			console.log(queryString);

			db.query(queryString, (err, result) => {
				if (err) {
					console.log("Query failed.")
					reject(err);
				} else {
					console.log("Query successful.")
					resolve(result.rows);
				}
			});
		})
	},

	getById: (id) => {
		return new Promise((resolve, reject) => {
			const queryString = "SELECT * FROM products WHERE product_id='" + id + "';"

			db.query(queryString, (err, result) => {
				if (err) {
					console.log("Query failed.")
					reject(err);
				} else {
					console.log("Query successful.")
					resolve(result.rows);
				}
			});
		})
	},

	updateProduct: (product) => {
		return new Promise((resolve, reject) => {
			const queryString = "UPDATE products SET SKU='" + product.sku + "', brand='" + product.brand + "', model='" + product.model + "', product_desc='" + product.product_desc + "', msrp=" + product.msrp + ", map=" + product.map + ", physical_item=" + product.physical_item + " WHERE product_id='" + product.product_id + "' RETURNING brand, model;"
			
			db.query(queryString, (err, result) => {
				if (err) {
					console.log("Query failed.")
					reject(err);
				} else {
					console.log("Query successful.")
					resolve(result.rows);
				}
			});
		})
	}
}