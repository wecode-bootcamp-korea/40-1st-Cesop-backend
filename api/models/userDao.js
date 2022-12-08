const dataSource = require("./dataSource");

const createUser = async (last_name, first_name, email, password) => {
  const result = await dataSource.query(
    `
	  INSERT INTO users (
			last_name, 
			first_name, 
			email, 
			password
		) VALUES (
				?,
				?, 
				?, 
				?
		)`,
    [last_name, first_name, email, password]
  );

  return result.insertId;
};

const getUserByEmail = async email => {
  const result = await dataSource.query(
    `
		SELECT 
			id,
			last_name,
			first_name,
			password			
		FROM users
		WHERE email=?`,
    [email]
  );

  return result[0];
};

const getUserById = async id => {
  const result = await dataSource.query(
    `
		SELECT 
			id,
			last_name,
			first_name
			email,
			password		
		FROM users
		WHERE id=?`,
    [id]
  );

  return result[0];
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
};
