const dataSource = require("./dataSource");

const addToCart = async (
  productId,
  productName,
  quantity,
  price,
  totalPrice
) => {
  const result = await dataSource.query(
    `
	  INSERT INTO cart_items (
      product_id,
      product_name, 
      quantity,
      price,
      total_price
		) VALUES (?, ?, ?, ?, ?)`,
    [productId, productName, quantity, price, totalPrice]
  );
  return result;
};

const getProductsFromCart = async () => {
  const result = await dataSource.query(
    `
		SELECT
      c.id,       
      c.product_name as productName, 
      c.quantity,
      c.price, 
      p.size as productSize
		  FROM cart_items c
      INNER JOIN
      products p
      ON
      p.id = c.product_id
      `
  );
  return result;
};

const updateCart = async (
  productName,
  quantity,
  price,
  totalPrice,
  userId,
  productId
) => {
  const result = await dataSource.query(
    `   
    UPDATE cart_items
    SET
      product_name = ?,
      quantity    = ?,
      price       = ?,
      total_price = ?
    WHERE user_id = ? AND product_id = ?
    `,
    [productName, quantity, price, totalPrice, userId, productId]
  );
  return result;
};

const deleteFromCart = async id => {
  const result = await dataSource.query(
    `
	   DELETE FROM cart_items WHERE id=${id}`
  );
  return result;
};

module.exports = {
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};
