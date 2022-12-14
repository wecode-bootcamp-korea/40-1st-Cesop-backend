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
  return result[0];
};

const getProductsFromCart = async id => {
  const result = await dataSource.query(
    `
		SELECT 
      product_name, 
      quantity,
      price,
      total_price
		FROM cart_items
		WHERE id=${id}`
  );
  return result[0];
};
//products(id)  <----------이게 기반되어 들어가야할듯
// 현재는 카트아이디로 했으나 유저아이디 기반 등으로 변경필요?
// 수정과 같은 id를 넣어서 어째 원하는 상품이 쭉 상품아이디가 들어가야할듯

const updateCart = async id => {
  //  << product(id)를 변경해서 해야함
  const updateProduct = await dataSource.query(
    // <<프로덕트id를 받아서 그중 상품명, 가격만 바꿔주는 쿼리문
    `
	   UPDATE cart_items    
     WHERE id=${id}`
  ); // 상품번호만 바꿔주면 이름과 가격이 자동변경되어야함
  //수량변경에 집중해서 //하나로 add 수량 업데이트보단 수량추가하는 개념으로 already has product Id  need to add
  const result = await dataSource.query(`   
    SELECT
      product_name,
      quantity,
      price,
      total_price
    FROM cart_items  
    `);
  return result[0];
}; //typeorm>transaction //공식문서

const deleteFromCart = async id => {
  const result = await dataSource.query(
    `
	   DELETE FROM cart_items WHERE id=${id}`
  );
  return result[0];
};

module.exports = {
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};
