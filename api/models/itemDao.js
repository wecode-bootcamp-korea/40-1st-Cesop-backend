const dataSource = require("./dataSource");

const getAllItems = async () => {
  const resultAll = await dataSource.query(
    `SELECT
		 *
		 FROM products
		`
  );
  return resultAll;
};

const getItemsByUserId = async id => {
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

const getItemsByName = async name => {
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
  getAllItems,
  getItemsByUserId,
  getItemsByName
};

