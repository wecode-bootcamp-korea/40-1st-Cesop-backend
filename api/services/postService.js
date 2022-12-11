const { postDao } = require("../models");

const getAllPosts = async () => {
  return await postDao.getAllPosts();
};

const getPostsByUser = async id => {
  const posts = await postDao.getPostsByUserId(id);
  return posts;
};

const getProductsByName = async name => {
  const products = await postDao.getPostsByName(name);
  return products;
};

module.exports = {
  getAllPosts,
  getPostsByUser,
  getProductsByName
};
