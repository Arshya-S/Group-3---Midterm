const db = require('../connection');

const getTodo = () => {
  return db
    .query(`SELECT * FROM lists`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getTodo };
