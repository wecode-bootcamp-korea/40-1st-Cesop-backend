const dataSource = require("./dataSource");

const getAllProducts = async () => {
  const resultAll = await dataSource.query(
    `SELECT
		id, 
    sub_categories_id, 
    product_name,
    product_image, 
    size,
    price,
    product_description,
    feeling, g
    texture_image,
    howtouse, 
    texture,
    flavor,
    amount_used,
    created_at,
    updated_at 
		 FROM products
		`
  );
  return resultAll;
};

const getProductsByCategoryId = async id => {
  const results = await dataSource.query(
    `
		SELECT 
		product_name,
    product_image, 
    size,
    price,
    product_description,
    feeling, 
    texture_image,
    howtouse, 
    texture,
    flavor,
    amount_used,
    created_at,
    updated_at 
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
		product_name,
    product_image, 
    size,
    price,
    product_description,
    feeling, 
    texture_image,
    howtouse, 
    texture,
    flavor,
    amount_used,
    created_at,
    updated_at 
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
