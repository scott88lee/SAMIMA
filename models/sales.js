const db = require('../db');

module.exports = {

  getLastInvNum: () => {
    return new Promise((resolve, reject) => {
      let queryString = "SELECT * FROM sales;"
      console.log(queryString)

      db.query(queryString, (err, result) => {
        if (err) {
          console.log("Query failed.")
          reject(err);
        } else {
          console.log("Query successful.")
          if (result.rows.length > 0) {
            resolve(result.rows[result.rows.length-1].sale_id);
          } else {
            resolve(0)
          }
        }
      });
    })
  },

  recordSale: (data) => {
    //Sanitize
    let invoice = {
      date: data.date.split("/")[1] + "/" + data.date.split("/")[0] + "/" + data.date.split("/")[2],
      source: data.source,
      source_ref: data.source_ref,
      pay_mode: data.pay_mode,
      pay_ref: data.pay_ref,
      total: 0
    }

    for (let i = 0; i < data.list.length; i++) {
      invoice.total += (data.list[i].qty * data.list[i].cost)
    }

    return new Promise((resolve, reject) => {
      const queryOne = "INSERT INTO sales (sale_date, sale_value, sale_source, src_ref, pay_mode, pay_ref) VALUES ('" + invoice.date + "', " + invoice.total + ", '" + invoice.source + "', '" + invoice.source_ref + "', '" + invoice.pay_mode + "', '" + invoice.pay_ref + "') RETURNING sale_id;"
      console.log(queryOne);

      db.query(queryOne, (err, result) => {
        if (err) {
          console.log("Query failed.")
          reject(err);
        }
        let sale_id = result.rows[0].sale_id

        let queryTwo = 'INSERT INTO sale_products (sale_id, product_id, quantity, price) VALUES ';
        for (let i = 0; i < data.list.length; i++) {
          if (i == data.list.length - 1) {
            queryTwo += "(" + sale_id + "," + data.list[i].pid + "," + data.list[i].qty + "," + data.list[i].cost + ") RETURNING 1;"
          } else {
            queryTwo += "(" + sale_id + "," + data.list[i].pid + "," + data.list[i].qty + "," + data.list[i].cost + "),"
          }
        }
        console.log(queryTwo);

        db.query(queryTwo, (err, result) => {
          if (err) {
            console.log("Query failed.")
            reject(err);
          }
          if (result) {
            console.log("Query successful.")
            resolve({ message: "Sale successfully recorded." });
          }
        })
      });
    })
  }    
}