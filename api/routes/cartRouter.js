const express = require("express");

const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

//실제 써야하는 코드
// router.post("/", cartController.addToCart); 
// router.get("/", loginRequired, cartController.getProductsFromCart);
// router.patch("/", loginRequired, cartController.updateCart);
// router.delete("/:cartId", loginRequired, cartController.deleteFromCart);

//테스트용 코드
router.post("/add", cartController.addToCart);
router.get("/", cartController.getProductsFromCart);
router.put("/:productId", cartController.updateCart);
router.delete("/:id", cartController.deleteFromCart);

module.exports = router;
