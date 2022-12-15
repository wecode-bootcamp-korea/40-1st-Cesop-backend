const express = require("express");

const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

// router.post("/", cartController.addToCart);
// router.get("/", loginRequired, cartController.getProductsFromCart);
// router.patch("/", loginRequired, cartController.updateCart);
// router.delete("/:cartId", loginRequired, cartController.deleteFromCart);

router.post("/add", cartController.addToCart);
router.get("/", cartController.getProductsFromCart);
router.patch("/", cartController.updateCart);
router.delete("/:id", cartController.deleteFromCart);

module.exports = router;
