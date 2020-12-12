// This module is to search out negative sales and display them in a table

const db = require('./db.js')
const _h = require('./helpers/helper')

let purchases = []
let sales = []

let queryString1 =
    "SELECT sp.sale_id, sp.product_id, sp.quantity, s.sale_date as date " +
        "FROM sale_products as sp " +
        "INNER JOIN sales as s ON s.sale_id = sp.sale_id " +
        "INNER JOIN products as p ON p.product_id = sp.product_id " +
    "WHERE p.physical_item = true " +
    "ORDER BY sp.product_id ASC, s.sale_date ASC;"

console.log(queryString1);

db.query(queryString1, (err, result1) => {
    if (err) { console.log("Query failed.") }    
    else {
        
        sales = result1.rows
        
        let queryString2 =
        "SELECT pp.purchase_id, pp.product_id, pp.quantity, p.inv_date as date " +
            "FROM purchase_products as pp " +
            "INNER JOIN purchases as p ON p.pur_id = pp.purchase_id " +
            "INNER JOIN products as pd ON pd.product_id = pp.product_id " +
        "WHERE pd.physical_item = true " +
        "ORDER BY pp.product_id ASC, p.inv_date ASC;"
        
        console.log(queryString2);

        db.query(queryString2, (err, result2) => {
            purchases = result2.rows
					
            let temp = {};
            let res = [];

            for (let i in sales) {
                if (!temp[sales[i].product_id.toString()]) {
                    res.push(
                        {							
                            product_id: sales[i].product_id,
                            sales_queue:[],
                            purchases_queue: []
                        }
                    )
                    temp[sales[i].product_id.toString()] = true;
                }
            }

            for (let i in res) {
                for (let k in sales)
                if (res[i].product_id == sales[k].product_id) {
                    res[i].sales_queue.push({
                        date: sales[k].date,
                        quantity: sales[k].quantity
                    })
                }
            }

            for (let i in res) {
                for (let k in purchases)
                if (res[i].product_id == purchases[k].product_id) {
                    res[i].purchases_queue.push({
                        date: purchases[k].date,
                        quantity: purchases[k].quantity
                    })
                }
            }


            //LIST SALES WITHOUT PURCHASES
            for(let i=0; i<res.length; i++) {
                let pQueue = res[i].purchases_queue
                let sQueue = res[i].sales_queue
                
                if (pQueue.length == 0){
                    console.log(res[i])
                }
            }//LIST SALES WITHOUT PURCHASES
        })
    }
})
