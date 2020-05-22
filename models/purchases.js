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
			date: data.date.split("/")[1] + "/" + data.date.split("/")[0] + "/" + data.date.split("/")[2],
			supplier: data.supplier.split("-")[0],
			inv_num: data.invoice_number,
			credit: data.credit_purchase ? true : false,
			total: 0,
			paid: !data.credit_purchase
		}

		let queryTwo = '';

		for (let i=0; i< data.list.length; i++){
			invoice.total += (data.list[i].qty * data.list[i].cost)
			
		}
		console.log(invoice)

		return new Promise((resolve, reject) => {
			const queryOne = "INSERT INTO purchases (inv_date, supplier_id, inv_num, inv_value, credit, paid) VALUES ('" + invoice.date + "', '" + invoice.supplier + "', '" + invoice.inv_num + "', '" + invoice.total + "', " + invoice.credit + ", " + invoice.paid + ") RETURNING pur_id;"
			console.log(queryOne);

			db.query(queryOne, (err, result) => {
				if (err) {
					console.log("Query failed.")
					reject(err);
				} else {
					console.log("Query successful.")
					console.log(result.rows)
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