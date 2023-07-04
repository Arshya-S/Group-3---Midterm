const db = require('../connection');

// Query for getting all a user's TODO items
const getUserTODOList = (id) => {
  return db.query(`
  SELECT * FROM lists
  WHERE user_id = $1;
  `, [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    })
}

module.exports = { getUserTODOList };
