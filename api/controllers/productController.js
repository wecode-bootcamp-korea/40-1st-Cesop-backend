const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductsById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const products = await productService.getProductsByUser(id);
  return res.status(200).json(products);
});

const getProducts = catchAsync(async (req, res) => {
  const name = req.query.name;
  const product = await productService.getProductsByName(name);
  return res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductsById,
  getProducts
};
