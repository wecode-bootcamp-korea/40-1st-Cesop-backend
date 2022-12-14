const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const addToCart = catchAsync(async (req, res) => {
  const { productName, quantity, price, totalPrice } = req.body;
  //비구조화할당  // 바디라는 개체에서 할당
  const cartId = await cartService.addToCart(
    //비동기처리의 카트서비스단의 xx메서드를 담는다
    productName, // 인자 = 객체 바디에서 가져온
    quantity,
    price,
    totalPrice
  );

  res.status(201).json({ cartId }); //반환응답은 생성코드와 cartId할당된 객체정보를 리턴을 해줄
});

const getProductsFromCart = catchAsync(async (req, res) => {
  const user = req.user;
  const products = await cartService.getProductsFromCart(user);
  return res.status(200).json(products);
});

const updateCart = async (req, res) => {
  const { productName, quantity, price, totalPrice } = req.body;
  const userId = req.user.id;
  const productId = +req.params.productId;

  try {
    const products = await cartService.updateCart(
      productName,
      quantity,
      price,
      totalPrice,
      userId,
      productId
    );
    res.status(204).json({ products });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const userId = req.user.id;
  const productId = +req.params.id;

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
