const { cartDao } = require("../models");

const addToCart = async (productName, quantity, price, totalPrice) => {  // << addcart의 경우 인자를 다 써줘야?
  return await cartDao.addToCart(productName, quantity, price, totalPrice);
}; // 값을 전달하였을떄 함수가 반환하였
//매개변수로 받는 4가지를 addto이자로 넣었을때 받은값을 컨트롤러로 변경

const getProductsFromCart = async cartId => {
  const cart = await cartDao.getProductsFromCart(cartId);
  return cart;
};

const updateCart = async cartId => {
  const cart = await cartDao.updateCart(cartId);
  return cart;
}; //

const deleteFromCart = async name => {
  const cart = await cartDao.deleteFromCart(name);
  return cart;
};

module.exports ={
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};
