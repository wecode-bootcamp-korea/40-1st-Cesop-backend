const { itemDao } = require("../models");

const getAllItems = async () => {
  return await itemDao.getAllItems();
};

const getItemsByUser = async id => {
  const items = await itemDao.getitemsByUserId(id);
  return items;
};

const getProductsByName = async name => {
  const products = await itemDao.getItemsByName(name);
  return products;
};

module.exports = {
  getAllItems,
  getItemsByUser,
  getProductsByName
};
