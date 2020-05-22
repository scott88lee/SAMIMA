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

	recordPurchase: (data) => {
		console.log(data)
		//Sanitize
		let invoice = {
			date: data.data,
			supplier: data.supplier.split("-")[0],
			inv_num: data.invoice_number,
			credit: data.credit_purchase,
			total: 0,
			paid: !data.credit_purchase
		}

		for (let i=0; i< data.list.length; i++){
			invoice.total += (data.list[i].qty * data.list[i].cost)
		}
		console.log(invoice)


		return new Promise((resolve, reject) => {
			const queryString = "SELECT * FROM suppliers"
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