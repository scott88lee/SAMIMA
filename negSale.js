// This module is to search out negative sales and display them in a table

const db = require('./db.js')
const _h = require('./helpers/helper')

let data = {};

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
        
        data.sales = result1.rows
        
        let queryString2 =
        "SELECT pp.purchase_id, pp.product_id, pp.quantity, p.inv_date as date " +
            "FROM purchase_products as pp " +
            "INNER JOIN purchases as p ON p.pur_id = pp.purchase_id " +
            "INNER JOIN products as pd ON pd.product_id = pp.product_id " +
        "WHERE pd.physical_item = true " +
        "ORDER BY pp.product_id ASC, p.inv_date ASC;"
        
        console.log(queryString2);

        db.query(queryString2, (err, result2) => {
            data.pur = result2.rows
            //console.log(data)

            console.log(data.pur[0].date);
            console.log(data.pur[1].date);
            console.log(data.pur[2].date);

            console.log(data.pur[0].date < data.pur[1].date)

            console.table(data.pur[1,4])
            console.table(data.sales[1])
        })
    }
})
