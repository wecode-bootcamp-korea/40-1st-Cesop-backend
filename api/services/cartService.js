const { cartDao } = require("../models");

const addToCart = async (productId, productName, quantity, price, totalPrice) => {
  return await cartDao.addToCart(productId, productName, quantity, price, totalPrice);
};

const getProductsFromCart = async () => {
  const cart = await cartDao.getProductsFromCart();
  return cart;
};

const updateCart = async ( quantity, userId, productId) => {
  const cart = await cartDao.updateCart(quantity, userId, productId);
  return cart;
};

const deleteFromCart = async name => {
  const cart = await cartDao.deleteFromCart(name);
  return cart;
};

module.exports = {
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};
