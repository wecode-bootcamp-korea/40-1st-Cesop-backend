const dataSource = require("./dataSource");

const getAllProducts = async () => {
  const resultAll = await dataSource.query(
    `SELECT
		 *
		 FROM products
		`
  );
  return resultAll;
};

const getProductsByCategoryId = async id => {
  const results = await dataSource.query(
    `
		SELECT 
		*
		FROM 
		products 
		WHERE 
		sub_categories_id = '${id}'
		`
  );
  return results;
};

const getProductsByName = async name => {
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
  getAllProducts,
  getProductsByCategoryId,
  getProductsByName
};
