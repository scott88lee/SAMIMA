const db = require('./db');

let squeryString = "SELECT * FROM products;"

let dqueryString = "SELECT SUM(price), cat FROM sale_products AS sp JOIN products AS p ON p.product_id = sp.product_id GROUP BY cat;"

//let queryString = "SELECT * FROM purchase_products INNER JOIN purchases ON purchases.pur_id = purchase_products.purchase_id INNER JOIN products ON products.product_id = purchase_products.product_id ORDER BY inv_date;"
 
 // SELECT * FROM sale_products
 //   INNER JOIN sales ON sales.sale_id = sale_products.sale_id
 //   INNER JOIN products ON products.product_id = sale_products.product_id
 // ORDER BY sale_date;


//Getting ALL PURCHASES
//let queryString = "SELECT pur.pur_id, p.product_id, p.sku, p.brand, p.model, pp.quantity, pp.price, pur.inv_date FROM products as p INNER JOIN purchase_products as pp ON p.product_id = pp.product_id INNER JOIN purchases as pur ON pp.purchase_id = pur.pur_id WHERE p.physical_item = true ORDER BY pur.inv_date;"

let queryString = "SELECT main.product_id, sum(main.quantity) as total FROM (SELECT pur.pur_id, p.product_id, p.sku, p.brand, p.model, pp.quantity, pp.price, pur.inv_date FROM products as p INNER JOIN purchase_products as pp ON p.product_id = pp.product_id INNER JOIN purchases as pur ON pp.purchase_id = pur.pur_id WHERE p.physical_item = true ORDER BY pur.inv_date) as main GROUP BY main.product_id;"

db.query(queryString, (err, res) => {
	if (err) {
		console.log(err)
	} else {
		let purchases = res.rows;
		console.table(purchases);
	}
})


//To check if inventory is negative


