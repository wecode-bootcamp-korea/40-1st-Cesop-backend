const dataSource = require("./dataSource");

const getAllProducts = async () => {
  const resultAll = await dataSource.query(
    `SELECT
		id,
    main_category_id, 
    sub_category_id, 
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
		 FROM products
		`
  );
  return resultAll;
};

const getProductByMain = async id => {
  const results = await dataSource.query(
    `
		SELECT
    sub_category_id,
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
		main_category_id = '${id}'
		`
  );
  return results;
};

const getProductByCategory = async id => {
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
		sub_category_id = '${id}'
		`
  );
  return results;
};

const getProductsByUserId = async id => {
  const product = await dataSource.query(
    `SELECT
      id, 
      sub_category_id, 
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
		 FROM products
     WHERE 
      products.id = '${id}'
		`
  );
  return product;
};

const getProductsByName = async name => {
  const result = await dataSource.query(
    `
		SELECT 
		sub_category_id,
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
  getProductByMain,
  getProductByCategory,
  getProductsByUserId,
  getProductsByName
};
