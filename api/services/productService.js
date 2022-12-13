const { productDao } = require("../models");

const getAllProducts = async () => {
  return await productDao.getAllProducts();
};

const getProductsByCategories = async id => {
  const products = await productDao.getProductsByCategoryId(id);
  return products;
};

const getProductsByName = async name => {
  const products = await productDao.getProductsByName(name);
  return products;
};

module.exports = {
  getAllProducts,
  getProductsByCategories,
  getProductsByName
};

