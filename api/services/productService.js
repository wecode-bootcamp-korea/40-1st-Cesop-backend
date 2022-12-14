const { productDao } = require("../models");

const getAllProducts = async () => {
  return await productDao.getAllProducts();
};

const getProductById = async (productId) => {
  const products = await productDao.getProductById(productId);
  return products;
};

const getProductsByCategoryId = async (id) => {
  const products = await productDao.getProductsByCategoryId(id);
  return products;
}; //

const getProductsByName = async (name) => {
  const products = await productDao.getProductsByName(name);
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategoryId, //
  getProductsByName,
};
