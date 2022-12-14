const express = require("express");

const { productController } = require("../controllers");
const { getProductsByCategories } = require("../controllers/productController");
const { getProductsByUserId } = require("../controllers/productController"); //
const { getProductsByName } = require("../controllers/productController");

const router = express.Router();

router.get("/all", productController.getAllProducts);
router.get("/sub_categories/:id", getProductsByCategories);
router.get("/product/:id", getProductsByUserId);  //
router.get("/search", getProductsByName);

module.exports = router;
