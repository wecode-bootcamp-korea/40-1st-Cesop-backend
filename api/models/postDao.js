const dataSource = require("./dataSource");

const getAllPosts = async () => {
  const resultAll = await dataSource.query(
    `SELECT
		 *
		 FROM products
		`
  );
  return resultAll;
};

const getPostsByUserId = async id => {
  const results = await dataSource.query(
    `
		SELECT 
		*
		FROM 
		products 
		WHERE 
		sub_categories = '${id}'
		`
  );
  return results;
};

const getPostsByName = async name => {
  const result = await dataSource.query(
    `
		SELECT 
		*
		FROM 
		products 
		WHERE 
		product_name LIKE '%${name}%'
		`
  );
  
  return result;
};

module.exports = {
  getAllPosts,
  getPostsByUserId,
  getPostsByName
};

