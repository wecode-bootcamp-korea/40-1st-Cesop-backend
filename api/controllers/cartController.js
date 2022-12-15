const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const addToCart = catchAsync(async (req, res) => {
  const { productName, quantity, price, totalPrice } = req.body;

  const cartId = await cartService.addToCart(
    productName,
    quantity,
    price,
    totalPrice
  );

  res.status(201).json({ cartId });
});

const getProductsFromCart = catchAsync(async (req, res) => {
  const { cartId } = req.body;

  return res.status(200).json(await cartService.getProductsFromCart(cartId));
});

const updateCart = async (req, res) => {
  const { productName, quantity, price, totalPrice } = req.body; //d
  // const userId = req.user.id;  // 실제로 써야하는 코드
  const userId = 4; //테스트용 코드
  const productId = parseInt(req.params.productId);

  try {
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
  // const userId = req.user.id; //어차피 로그인 상태이니 필요없을듯
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
