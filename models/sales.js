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
          resolve(result.rows);
        }
      });
    })
  }
}