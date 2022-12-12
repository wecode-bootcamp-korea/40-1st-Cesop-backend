const { itemService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllItems = catchAsync(async (req, res) => {
  const items = await itemService.getAllItems();
  res.status(200).json(items);
});

const getItems = catchAsync(async (req, res) => {
  const id = req.params.id;
  const items = await itemService.getItemsByUser(id);
  return res.status(200).json(items);
});

const getProducts = catchAsync(async (req, res) => {
  const name = req.query.name;
  const product = await itemService.getProductsByName(name);
  return res.status(200).json(product);
});

module.exports = {
  getAllItems,
  getItems,
  getProducts
};
