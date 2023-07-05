const db = require('../connection');

const updateUserProfile = (body) => {
  const queryString = `
  UPDATE users
  SET name = $1, email = $2, password = $3
  WHERE id = $4;`;
  const queryParams = [body.name, body.email, body.password, body.id];
  console.log(queryString, queryParams);
  console.log('body:', body);
  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch(() => {
      return null;
    });
};

module.exports = { updateUserProfile };
