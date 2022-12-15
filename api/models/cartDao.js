const dataSource = require("./dataSource");

const addToCart = async (productName, quantity, price, totalPrice) => {
  const result = await dataSource.query(
    `
	  INSERT INTO cart_items (
      product_name, 
      quantity,
      price,
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

const updateCart = async (productName, quantity, price, totalPrice) => {
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    if (!productName) {
      productName = null;
    }
    if (!quantity) {
      quantity = null;
    }

    const updateProduct = await queryRunner.query(
      `
	   UPDATE cart_items
     SET  productName = ?,
          quantity    = ?,
          price       = ?,
          total_Price = ?
          WHERE id = ? AND product_id = ? AND user_id = ?`,
      [productName, quantity, price, totalPrice]
    );

    if (updateProduct !== 1) throw new Error("UNEXPECTED_CART_ITEM_UPDATED");

    const result = await queryRunner.query(
      `   
    SELECT
      c.id,
      c.product_name,
      c.quantity,
      c.price,
      c.total_price
    FROM cart_items c  
    INNER JOIN users u On u.id = c.user_id
    WHERE u.id =? And c.id =?`,
      [userId, postId]
    );
    await queryRunner.commitTransaction();
    return result;
  } catch (err) {
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
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
