const { productDao } = require("../models");

const getAllProducts = async () => {
  return await productDao.getAllProducts();
};

const getProductByMain = async id => {
  const products = await productDao.getProductByMain(id);
  return products;
};

const getProductByCategory = async id => {
  const products = await productDao.getProductByCategory(id);
  return products;
};

const getProductsByUserId = async id => {
  const products = await productDao.getProductsByUserId(id);
  return products;
}; 

const getProductsByName = async name => {
  const products = await productDao.getProductsByName(name);
  return products;
};

module.exports = {
  getAllProducts,
  getProductByMain,
  getProductByCategory,
  getProductsByUserId,
  getProductsByName
};
