const db = require('./db.js')
const _h = require('./helpers/helper')

let d = new Date()

let queryString = "SELECT * FROM products;"

db.query(queryString, (err, result) => {
    if (err) {
        console.log("Query failed.")
        reject(err);
    } else {
        console.log("Success!")
        console.log(result.rows)
        console.log(result.rows.length)
    }
})
