const db = require('../connection');

const changeCategory = (newCategoryID, itemTitle) => {
  return db
    .query(`
    UPDATE lists
    SET category_id = $1
    WHERE title = $2;
    `, [newCategoryID,itemTitle])
    .then(data => {
      return data.rows;
    }).catch(err => {
      console.log('Query error: ', err);
    })
};


module.exports = { changeCategory }
