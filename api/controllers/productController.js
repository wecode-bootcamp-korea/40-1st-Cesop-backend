const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductById = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const products = await productService.getProductById(productId);
  return res.status(200).json(products);
});

const getProductsByUserId = catchAsync(async (req, res) => {
  const product = await productService.getProductsByUserId(id);
  res.status(200).json(product);
}); //

const getProducts = catchAsync(async (req, res) => {
  const name = req.query.name;
  const product = await productService.getProductsByName(name);
  return res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByUserId, //
  getProducts,
};
