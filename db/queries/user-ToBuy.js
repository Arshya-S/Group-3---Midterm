const db = require('../connection');

// Query for getting specific user's To-Read items
const getUserBuy = (id) => {
  return db.query(`
  SELECT * FROM lists
  WHERE user_id = $1
  AND category_id = $2`,[id,4])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    })
}

module.exports = { getUserBuy };
