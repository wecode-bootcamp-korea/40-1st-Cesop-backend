const express = require("express");

const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const router = express.Router();


router.post("/new", cartController.addToCart);
router.get("/", loginRequired, cartController.getProductsFromCart);
router.patch("/productId", loginRequired, cartController.updateCart);
router.delete("/:id", loginRequired, cartController.deleteFromCart);

module.exports = router;
