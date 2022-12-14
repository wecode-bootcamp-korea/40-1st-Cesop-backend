const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductsByCategories = catchAsync(async (req, res) => {
  const id = req.params.id;
  const products = await productService.getProductsByCategories(id);
  return res.status(200).json(products);
});

const getProductsByUserId = catchAsync(async (req, res) => {
  const product = await productService.getProductsByUserId(productId);
  res.status(200).json(product);
});  //

const getProductsByName = catchAsync(async (req, res) => {
  const name = req.query.name;
  const product = await productService.getProductsByName(name);
  return res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductsByCategories,
  getProductsByUserId, 
  getProductsByName
};
