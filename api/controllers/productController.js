const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductByMain = catchAsync(async (req, res) => {
  const id = req.params.id;
  const products = await productService.getProductByMain(id);
  return res.status(200).json(products);
});

const getProductByCategory = catchAsync(async (req, res) => {
  const id = req.params.id;
  const products = await productService.getProductByCategory(id);
  return res.status(200).json(products);
});

const getProductsByUserId = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await productService.getProductsByUserId(id);
  res.status(200).json(product);
});

const getProductsByName = catchAsync(async (req, res) => {
  const name = req.query.name;
  const product = await productService.getProductsByName(name);
  return res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductByMain,
  getProductByCategory,
  getProductsByUserId,
  getProductsByName
};
