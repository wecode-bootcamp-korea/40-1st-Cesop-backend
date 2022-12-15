const dataSource = require("./dataSource");

const addToCart = async (productName, quantity, price, totalPrice) => {
  const result = await dataSource.query(
    `
	  INSERT INTO cart_items (
      product_name, 
      quantity,
      price,
      sub_price
      total_price
		) VALUES (?, ?,	?, ?)`,
    [productName, quantity, price, totalPrice]
  );
  return result;
};

const getProductsFromCart = async cartId => {
  const result = await dataSource.query(
    `
		SELECT
      id,       
      user_id,
      product_name, 
      quantity,
      price,
      total_price
		  FROM cart_items      
      WHERE id=?`,
    [cartId]
  );

  return result;
};

const updateCart = async (
  //
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
  // console.log(result.affectedRows);
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
