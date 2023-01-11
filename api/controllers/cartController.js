const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const addToCart = catchAsync(async (req, res) => {
  const { productId, productName, quantity, price, totalPrice } = req.body;

  const cartId = await cartService.addToCart(
    productId,
    productName,
    quantity,
    price,
    totalPrice
  );

  res.status(201).json({ cartId });
});

const getProductsFromCart = catchAsync(async (req, res) => {
  const { cartId } = req.body;

  return res.status(200).json(await cartService.getProductsFromCart());
});

const updateCart = async (req, res) => {
  const { productName, quantity, price, totalPrice } = req.body; //
  const userId = req.user.id; 
  const productId = parseInt(req.params.productId);

  try{
    const products = await cartService.updateCart(
      productName,
      quantity,
      price,
      totalPrice,
      userId,
      productId
    );
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const productId = req.params.id;
  
  try {
    await cartService.deleteFromCart(productId);
    res.status(204).send();
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};

